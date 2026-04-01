'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ─── constants ───────────────────────────────────────────────
const AMBER       = 0xE8963C;
const AMBER_GLOW  = 0xFFB86C;
const NODE_COUNT  = 58;
const SPHERE_R    = 3.6;
const CONNECT_D   = 2.3;

function buildNodes(): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const phi   = Math.acos(1 - 2 * (i + 0.5) / NODE_COUNT);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const r = SPHERE_R * (0.42 + (((i * 7919) % 100) / 100) * 0.62);
    pts.push(new THREE.Vector3(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi),
    ));
  }
  return pts;
}

function buildEdges(nodes: THREE.Vector3[]): [number, number][] {
  const edges: [number, number][] = [];
  const count = new Array(nodes.length).fill(0);
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (count[i] >= 4 || count[j] >= 4) continue;
      if (nodes[i].distanceTo(nodes[j]) < CONNECT_D) {
        edges.push([i, j]);
        count[i]++;
        count[j]++;
      }
    }
  }
  return edges;
}

export default function NeuralLattice() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── renderer ──
    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── scene / camera ──
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 9.5);

    // ── geometry ──
    const nodes = buildNodes();
    const edges = buildEdges(nodes);
    const hubs  = new Set<number>([3, 9, 15, 22, 31, 40, 47, 54].map(s => s % nodes.length));

    const group = new THREE.Group();
    scene.add(group);

    // nodes — instanced mesh
    const nodeMat  = new THREE.MeshBasicMaterial({ color: AMBER });
    const nodeGeo  = new THREE.SphereGeometry(0.072, 10, 10);
    const nodeMesh = new THREE.InstancedMesh(nodeGeo, nodeMat, nodes.length);
    nodeMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    group.add(nodeMesh);

    // edges — line segments
    {
      const pos: number[] = [];
      edges.forEach(([a, b]) => {
        pos.push(nodes[a].x, nodes[a].y, nodes[a].z);
        pos.push(nodes[b].x, nodes[b].y, nodes[b].z);
      });
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      const mat = new THREE.LineBasicMaterial({ color: AMBER, transparent: true, opacity: 0.13 });
      group.add(new THREE.LineSegments(geo, mat));
    }

    // flow particles — instanced mesh
    const partMat  = new THREE.MeshBasicMaterial({ color: AMBER_GLOW });
    const partGeo  = new THREE.SphereGeometry(0.048, 7, 7);
    const partMesh = new THREE.InstancedMesh(partGeo, partMat, edges.length);
    partMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    group.add(partMesh);

    const partData = edges.map(([a, b], i) => ({
      from:   nodes[a],
      to:     nodes[b],
      speed:  0.22 + ((i * 137) % 100) / 100 * 0.45,
      offset: ((i * 83)  % 100) / 100,
    }));

    // ── mouse parallax ──
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth)  * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // ── resize ──
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // ── animation loop ──
    const obj = new THREE.Object3D();
    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = (performance.now() - startTime) / 1000;

      // group rotation
      group.rotation.y = t * 0.065;
      group.rotation.x = t * 0.022;

      // camera parallax
      camera.position.x += (mouseX * 1.8 - camera.position.x) * 0.022;
      camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.022;
      camera.lookAt(0, 0, 0);

      // update node matrices
      nodes.forEach((pos, i) => {
        const base  = hubs.has(i) ? 1.1 : 0.38 + ((i * 31) % 10) * 0.055;
        const pulse = hubs.has(i) ? 1 + Math.sin(t * 1.6 + i * 0.9) * 0.32 : 1;
        obj.position.copy(pos);
        obj.scale.setScalar(base * pulse);
        obj.updateMatrix();
        nodeMesh.setMatrixAt(i, obj.matrix);
      });
      nodeMesh.instanceMatrix.needsUpdate = true;

      // update particle matrices
      partData.forEach((p, i) => {
        const u = ((t * p.speed + p.offset) % 1);
        obj.position.lerpVectors(p.from, p.to, u);
        obj.scale.setScalar(1);
        obj.updateMatrix();
        partMesh.setMatrixAt(i, obj.matrix);
      });
      partMesh.instanceMatrix.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // ── cleanup ──
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      partGeo.dispose();
      partMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}
