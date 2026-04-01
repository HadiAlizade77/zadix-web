'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ─── constants ───────────────────────────────────────────────
const AMBER       = '#E8963C';
const AMBER_GLOW  = '#FFB86C';
const NODE_COUNT  = 58;
const SPHERE_R    = 3.6;
const CONNECT_D   = 2.3;

// ─── geometry helpers ─────────────────────────────────────────
function buildNodes(): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    // Fibonacci-sphere distribution — even but organic
    const phi   = Math.acos(1 - 2 * (i + 0.5) / NODE_COUNT);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    // Vary radius per node so depth feels real
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

// ─── instanced nodes ─────────────────────────────────────────
function Nodes({ nodes, hubs }: { nodes: THREE.Vector3[]; hubs: Set<number> }) {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const obj  = useMemo(() => new THREE.Object3D(), []);

  useFrame(({ clock }) => {
    nodes.forEach((pos, i) => {
      const base  = hubs.has(i) ? 1.1 : 0.38 + ((i * 31) % 10) * 0.055;
      const pulse = hubs.has(i)
        ? 1 + Math.sin(clock.elapsedTime * 1.6 + i * 0.9) * 0.32
        : 1;
      obj.position.copy(pos);
      obj.scale.setScalar(base * pulse);
      obj.updateMatrix();
      mesh.current.setMatrixAt(i, obj.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, nodes.length]}>
      <sphereGeometry args={[0.072, 10, 10]} />
      <meshBasicMaterial color={AMBER} />
    </instancedMesh>
  );
}

// ─── edge lines ───────────────────────────────────────────────
function Edges({ edges, nodes }: { edges: [number, number][]; nodes: THREE.Vector3[] }) {
  const geo = useMemo(() => {
    const pos: number[] = [];
    edges.forEach(([a, b]) => {
      const na = nodes[a], nb = nodes[b];
      pos.push(na.x, na.y, na.z, nb.x, nb.y, nb.z);
    });
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    return g;
  }, [edges, nodes]);

  return (
    <lineSegments geometry={geo}>
      <lineBasicMaterial color={AMBER} transparent opacity={0.13} />
    </lineSegments>
  );
}

// ─── flowing particles ────────────────────────────────────────
function FlowParticles({ edges, nodes }: { edges: [number, number][]; nodes: THREE.Vector3[] }) {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const obj  = useMemo(() => new THREE.Object3D(), []);

  const data = useMemo(() =>
    edges.map(([a, b], i) => ({
      from:   nodes[a],
      to:     nodes[b],
      speed:  0.22 + ((i * 137) % 100) / 100 * 0.45,
      offset: ((i * 83)  % 100) / 100,
    }))
  , [edges, nodes]);

  useFrame(({ clock }) => {
    data.forEach((p, i) => {
      const t = ((clock.elapsedTime * p.speed + p.offset) % 1);
      obj.position.lerpVectors(p.from, p.to, t);
      obj.scale.setScalar(1);
      obj.updateMatrix();
      mesh.current.setMatrixAt(i, obj.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, edges.length]}>
      <sphereGeometry args={[0.048, 7, 7]} />
      <meshBasicMaterial color={AMBER_GLOW} />
    </instancedMesh>
  );
}

// ─── scene root ───────────────────────────────────────────────
function Scene() {
  const group = useRef<THREE.Group>(null!);

  const nodes = useMemo(buildNodes, []);
  const edges = useMemo(() => buildEdges(nodes), [nodes]);
  const hubs  = useMemo(() => {
    const h = new Set<number>();
    const seeds = [3, 9, 15, 22, 31, 40, 47, 54];
    seeds.forEach(s => h.add(s % nodes.length));
    return h;
  }, [nodes]);

  useFrame(({ clock, mouse, camera }) => {
    // Slow dual-axis rotation
    group.current.rotation.y = clock.elapsedTime * 0.065;
    group.current.rotation.x = clock.elapsedTime * 0.022;

    // Soft mouse parallax on the camera
    camera.position.x += (mouse.x * 1.8 - camera.position.x) * 0.022;
    camera.position.y += (mouse.y * 1.2 - camera.position.y) * 0.022;
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <Nodes  nodes={nodes} hubs={hubs} />
      <Edges  edges={edges} nodes={nodes} />
      <FlowParticles edges={edges} nodes={nodes} />
    </group>
  );
}

// ─── exported canvas ──────────────────────────────────────────
export default function NeuralLattice() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9.5], fov: 52 }}
      dpr={[1, 1.5]}
      gl={{
        antialias:       false,
        alpha:           true,
        powerPreference: 'high-performance',
      }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  );
}
