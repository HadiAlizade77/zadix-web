#!/usr/bin/env node
// scripts/generate-post.mjs

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname  = dirname(fileURLToPath(import.meta.url));
const BLOG_DATA  = join(__dirname, '..', 'lib', 'blog-data.ts');
const CURRENT_YEAR = new Date().getFullYear();   // 2026 — never hardcode a year

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const NEWSAPI_KEY        = process.env.NEWSAPI_KEY;

if (!OPENROUTER_API_KEY || !NEWSAPI_KEY) {
  console.error('ERROR: OPENROUTER_API_KEY and NEWSAPI_KEY env vars are required.');
  process.exit(1);
}

// ─── news search queries (no years — they age badly) ────────────────────────
const SEARCH_QUERIES = [
  'AI automation business operations',
  'workflow automation enterprise',
  'artificial intelligence business processes',
  'business process automation ROI',
  'agentic AI enterprise software',
  'document processing AI',
  'lead qualification artificial intelligence',
  'logistics freight technology automation',
  'real estate proptech automation',
  'SaaS revenue operations automation',
  'AI productivity tools operations',
  'machine learning business efficiency',
];

// ─── evergreen topics — diverse across all 8 industries + strategy ───────────
// Grouped so we can rotate and avoid clustering on one topic
const EVERGREEN_BY_INDUSTRY = {
  'real-estate': [
    `How Real Estate Agencies Qualify 300+ Leads Monthly Without Extra Headcount`,
    `Why Properties Sell Faster When Leads Get a Response in Under 60 Seconds`,
    `From WhatsApp Enquiry to Viewing Booked: Automating the First 24 Hours`,
    `Multilingual Lead Qualification: How Dubai Agencies Handle Arabic and English Leads at Scale`,
    `CRM Chaos to Closed Deals: Automating Your Real Estate Back Office`,
  ],
  'logistics': [
    `The RFQ That Takes 18 Minutes vs 2 Hours: What Freight Automation Actually Looks Like`,
    `How Freight Forwarders Win 30% More Business by Responding First`,
    `Stop Losing Shipment Exceptions: An Automated Triage Playbook`,
    `Rate Lookup, Margin Protection, Quote Sent: Automating the Full RFQ Cycle`,
    `How a Mid-Size 3PL Eliminated 440 Hours of Monthly Admin Work`,
  ],
  'investment': [
    `From 200-Page CIM to 2-Page IC Memo in 20 Minutes: Investment Automation Explained`,
    `KYC Without the Bottleneck: How Investment Firms Automate Compliance Workflows`,
    `Portfolio Monitoring Across 12 Systems: The Automation That Connects the Dots`,
    `How Family Offices Cut Deal Analysis Time by 75% Without Growing the Team`,
    `Automating the Investment Committee Prep Pack: A Step-by-Step Breakdown`,
  ],
  'saas': [
    `Why Your Best Leads Go Cold Before Sales Even Opens the CRM`,
    `The Hidden Revenue Leak in Every B2B SaaS Trial Flow`,
    `From Trial Signup to Sales Call: Automating the Qualification Handoff`,
    `How B2B SaaS Teams Keep Their CRM Clean Without Manual Data Entry`,
    `Churn Signals Your CS Team Misses (And How AI Catches Them First)`,
  ],
  'healthcare': [
    `Patient Intake Automation: How Clinics Reclaim 3 Hours of Admin Per Day`,
    `Insurance Verification in Seconds, Not Hours: A Healthcare Automation Case Study`,
    `From Referral to Appointment: Automating the First Patient Touchpoint`,
  ],
  'legal': [
    `Contract Review AI: Processing 50 Agreements a Day Without Hiring More Lawyers`,
    `How Law Firms Extract Key Clauses Across 100 Contracts in Under an Hour`,
    `Compliance Monitoring That Never Sleeps: AI for Legal Teams`,
  ],
  'construction': [
    `How EPC Firms Win More Tenders with AI-Assisted Bid Analysis`,
    `BoQ Processing in Hours, Not Days: Construction Automation in Practice`,
    `Submittal Tracking Without the Spreadsheet: A Construction PM Automation Story`,
  ],
  'strategy': [
    `The 30-Day Automation ROI Framework: Measure Value Without Data Science`,
    `Why AI Projects Fail in Production — and How to Make Sure Yours Doesn't`,
    `Human-in-the-Loop: The Approval Layer Every AI Workflow Needs`,
    `The 7 Questions to Ask Before Automating Any Business Process`,
    `What Is an AI Agent? A Plain-English Guide for Operations Leaders`,
    `Fixed Scope, Fixed Timeline: Why AI Automation Projects Fail When Scope Creeps`,
    `The Automation Audit: How to Find Your Highest-ROI Process in 2 Hours`,
  ],
  'engineering': [
    `Five Guardrails That Make AI Workflows Safe in Production`,
    `Dead Letter Queues, Retries, and Rate Limits: Engineering Reliable Automation`,
    `Observability for AI Systems: What to Track When Your Automation Goes Wrong`,
    `How We Use Langfuse to Trace Every AI Decision in Production`,
    `The Rollback Procedure Every AI Workflow Needs Before Go-Live`,
  ],
};

// Flat list for random fallback
const ALL_EVERGREEN = Object.values(EVERGREEN_BY_INDUSTRY).flat();

// ─── industry → specific CTA copy ───────────────────────────────────────────
const INDUSTRY_CTAS = {
  'real-estate': `We have deployed this exact lead qualification workflow for real estate agencies in Dubai, London, and Singapore — going live in 7 days. [Book a free 20-minute scoping call at zadix.ai/contact](https://zadix.ai/contact) and we will map out your specific workflow and send a fixed-price proposal within 24 hours.`,
  'logistics':   `We have built this RFQ automation for freight forwarders and 3PLs — rate lookup, margin protection, CRM update, quote sent. Production-ready in 7 days. [Book a free scoping call at zadix.ai/contact](https://zadix.ai/contact) and we will scope your specific workflow at no cost.`,
  'investment':  `We have built deal analysis and IC memo automation for family offices and investment firms — cutting prep time from days to under an hour. [Book a free 20-minute call at zadix.ai/contact](https://zadix.ai/contact) to see how this applies to your deal flow.`,
  'saas':        `We have deployed pipeline automation and lead qualification workflows for B2B SaaS companies — clean CRM, faster handoffs, less churn. [Book a free scoping call at zadix.ai/contact](https://zadix.ai/contact) and we will audit your current flow and propose a specific fix.`,
  'healthcare':  `We have built patient intake and insurance verification workflows for clinics — HIPAA-compliant and live in 7 days. [Book a free 20-minute call at zadix.ai/contact](https://zadix.ai/contact) to scope your specific process.`,
  'legal':       `We have built contract review and clause extraction automation for law firms — processing 50+ agreements a day without adding headcount. [Book a free scoping call at zadix.ai/contact](https://zadix.ai/contact) to see how this applies to your document volume.`,
  'construction':`We have built tender analysis and BoQ processing automation for EPC and construction firms. [Book a free 20-minute call at zadix.ai/contact](https://zadix.ai/contact) and we will scope your bid workflow specifically.`,
  'default':     `We have deployed this type of automation for clients across real estate, logistics, SaaS, investment, and more — production-ready in 7 days. [Book a free 20-minute scoping call at zadix.ai/contact](https://zadix.ai/contact) and we will send a fixed-price proposal within 24 hours.`,
};

// ─── fetch trending news ─────────────────────────────────────────────────────
async function fetchTrendingTopic() {
  const query = SEARCH_QUERIES[Math.floor(Math.random() * SEARCH_QUERIES.length)];
  console.log(`Searching news: "${query}"`);

  try {
    const res = await fetch('https://newsapi.ai/api/v1/article/getArticles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'getArticles',
        keyword: query,
        articlesPage: 1,
        articlesCount: 25,
        articlesSortBy: 'date',
        dataType: ['news'],
        lang: 'eng',
        apiKey: NEWSAPI_KEY,
      }),
    });

    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data     = await res.json();
    const articles = data?.articles?.results ?? [];
    if (articles.length === 0) throw new Error('Empty result set');

    // Prefer articles with AI/automation relevance, but don't fail if none match
    const scored = articles
      .map(a => {
        const text  = ((a.title || '') + ' ' + (a.body || '')).toLowerCase();
        const score = ['ai', 'automat', 'workflow', 'machine learning', 'productiv', 'efficiency', 'operational']
          .reduce((s, kw) => s + (text.includes(kw) ? 1 : 0), 0);
        return { article: a, score };
      })
      .sort((a, b) => b.score - a.score);

    const picked = scored[0].article;
    console.log(`Using article: "${picked.title}" (relevance ${scored[0].score}/7)`);
    return {
      title:   picked.title || '',
      summary: (picked.body || '').slice(0, 600),
      source:  picked.source?.title || 'Industry News',
    };
  } catch (err) {
    console.warn(`NewsAPI unavailable (${err.message}) — using evergreen topic.`);
    return null;
  }
}

// ─── read existing posts for deduplication + category rotation ───────────────
function getExistingPosts() {
  const content  = readFileSync(BLOG_DATA, 'utf8');
  const ids      = [...content.matchAll(/id:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const titles   = [...content.matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const cats     = [...content.matchAll(/category:\s*["']([^"']+)["']/g)].map(m => m[1]);
  return { ids: new Set(ids), titles: titles.slice(0, 12), recentCategories: cats.slice(0, 6) };
}

// ─── pick topic avoiding recent duplicates ───────────────────────────────────
function pickEvergreen(recentTitles, recentCategories) {
  // Avoid industries that appeared a lot recently
  const recentLower = recentTitles.map(t => t.toLowerCase());

  // Detect which industries are overrepresented in recent posts
  const industryCounts = {};
  for (const [industry, topics] of Object.entries(EVERGREEN_BY_INDUSTRY)) {
    industryCounts[industry] = topics.filter(t =>
      recentLower.some(r => r.includes(t.toLowerCase().slice(0, 20)))
    ).length;
  }

  // Pick from least-used industry
  const sorted = Object.entries(industryCounts).sort((a, b) => a[1] - b[1]);
  const targetIndustry = sorted[Math.floor(Math.random() * Math.min(3, sorted.length))][0];

  const pool = EVERGREEN_BY_INDUSTRY[targetIndustry] || ALL_EVERGREEN;
  const unused = pool.filter(t => !recentLower.some(r => r.includes(t.toLowerCase().slice(0, 20))));
  const source = unused.length > 0 ? unused : pool;

  return {
    title:    source[Math.floor(Math.random() * source.length)],
    summary:  '',
    source:   'Evergreen',
    industry: targetIndustry,
  };
}

// ─── detect industry from topic string ───────────────────────────────────────
function detectIndustry(topicTitle) {
  const t = topicTitle.toLowerCase();
  if (t.includes('real estate') || t.includes('propert') || t.includes('lead qualif') || t.includes('viewing'))    return 'real-estate';
  if (t.includes('freight') || t.includes('logistics') || t.includes('rfq') || t.includes('shipment') || t.includes('3pl')) return 'logistics';
  if (t.includes('invest') || t.includes('family office') || t.includes('kyc') || t.includes('cim') || t.includes('ic memo')) return 'investment';
  if (t.includes('saas') || t.includes('trial') || t.includes('pipeline') || t.includes('churn') || t.includes('b2b')) return 'saas';
  if (t.includes('patient') || t.includes('clinic') || t.includes('healthcare') || t.includes('insurance verif'))  return 'healthcare';
  if (t.includes('contract') || t.includes('legal') || t.includes('clause') || t.includes('law firm'))             return 'legal';
  if (t.includes('tender') || t.includes('boq') || t.includes('epc') || t.includes('construction') || t.includes('submittal')) return 'construction';
  return 'default';
}

// ─── slugify ─────────────────────────────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '').trim()
    .replace(/\s+/g, '-').replace(/-+/g, '-')
    .slice(0, 60).replace(/-$/, '');
}

// ─── generate post via Claude Opus 4.6 ──────────────────────────────────────
async function generatePost(topic, existingTitles) {
  const industry = topic.industry ?? detectIndustry(topic.title);
  const cta      = INDUSTRY_CTAS[industry] ?? INDUSTRY_CTAS.default;
  const authors  = ['Hadi Alizadeh', 'Engineering Team'];
  const author   = authors[Math.floor(Math.random() * 2)];

  const avoidList = existingTitles.slice(0, 8).map((t, i) => `${i + 1}. ${t}`).join('\n');

  const systemPrompt = `You are a senior content strategist for Zadix, a global AI automation agency. Key facts:
- Builds production-ready automations in 7–14 days
- Clients: real estate, logistics, SaaS, investment, healthcare, legal, construction, hospitality
- Cuts manual work 50–80%, full source code on delivery, 30-day guarantee
- Serves UAE, UK, US, Europe, globally
- Website: zadix.ai

Writing style: authoritative, specific, data-driven. Speak to business owners and ops managers who are sceptical of AI hype. Earn trust by being genuinely useful — never sound like a sales pitch. Use ${CURRENT_YEAR} stats and references — never mention years before ${CURRENT_YEAR - 1}.`;

  const userPrompt = `Write a high-quality, SEO-optimised blog post on this topic:

TOPIC: "${topic.title}"
${topic.summary ? `CONTEXT FROM NEWS: ${topic.summary}` : ''}
INDUSTRY FOCUS: ${industry}
AUTHOR: ${author}
CURRENT YEAR: ${CURRENT_YEAR}

ALREADY PUBLISHED — do NOT cover these topics or use similar titles:
${avoidList}

MANDATORY STRUCTURE:
## The Problem
## Why Existing Approaches Fall Short
## How AI Automation Changes the Picture
## A Real-World Example
## How to Get Started in 7 Days
## Ready to Automate? [INDUSTRY-SPECIFIC CTA — paste this EXACTLY as written below]

CTA TO USE VERBATIM IN THE FINAL SECTION (paste it exactly, no changes):
${cta}

REQUIREMENTS:
- 1,000–1,300 words
- At least one specific number/stat/metric per section
- Bold key facts and outcomes with **double asterisks**
- Use bullet points for lists, numbered steps for processes
- Industry-specific examples — not generic "company X did Y"
- Use ${CURRENT_YEAR} for any current year references
- Never say "in today's fast-paced world" or other clichéd openers
- Open with a surprising stat or a scenario the reader immediately recognises

SEO:
- Title: keyword at front, max 65 chars, specific (not generic)
- Meta description: 140–155 chars, keyword + urgency/curiosity
- Slug: lowercase hyphens, max 55 chars

Return ONLY raw valid JSON (no fences, no commentary):
{
  "title": "...",
  "slug": "...",
  "excerpt": "...",
  "category": "Strategy | Engineering | Case Study | Industry Insights",
  "readTime": "X min read",
  "author": "${author}",
  "content": "full markdown content"
}`;

  console.log(`Generating post for industry: ${industry}`);

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type':  'application/json',
      'HTTP-Referer':  'https://zadix.ai',
      'X-Title':       'Zadix Auto Blog',
    },
    body: JSON.stringify({
      model:    'anthropic/claude-opus-4.6',
      provider: { order: ['Anthropic'] },
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userPrompt },
      ],
      temperature: 0.70,
      max_tokens:  6000,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`OpenRouter ${res.status}: ${err}`);
  }

  const data = await res.json();
  const raw  = data.choices?.[0]?.message?.content ?? '';
  if (!raw) throw new Error('Empty response from OpenRouter');

  const cleaned = raw.replace(/^```(?:json)?\s*/m, '').replace(/\s*```$/m, '').trim();
  return JSON.parse(cleaned);
}

// ─── inject into blog-data.ts ────────────────────────────────────────────────
function escapeTemplate(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function injectPost(post) {
  const file  = readFileSync(BLOG_DATA, 'utf8');
  const entry = [
    `  {`,
    `    id: ${JSON.stringify(post.slug)},`,
    `    title: ${JSON.stringify(post.title)},`,
    `    author: ${JSON.stringify(post.author)},`,
    `    date: '${new Date().toISOString().split('T')[0]}',`,
    `    readTime: ${JSON.stringify(post.readTime)},`,
    `    category: ${JSON.stringify(post.category)},`,
    `    excerpt: ${JSON.stringify(post.excerpt)},`,
    `    content: \`${escapeTemplate(post.content)}\`,`,
    `  },`,
  ].join('\n');

  const MARKER  = 'export const blogPosts: BlogPost[] = [';
  const idx     = file.indexOf(MARKER);
  if (idx === -1) throw new Error('Cannot find blogPosts array');

  const insertAt = idx + MARKER.length;
  writeFileSync(BLOG_DATA, file.slice(0, insertAt) + '\n' + entry + '\n' + file.slice(insertAt), 'utf8');
  console.log(`✓ Published: "${post.title}" [${post.category}]`);
}

// ─── main ────────────────────────────────────────────────────────────────────
const { ids: existingIds, titles: recentTitles, recentCategories } = getExistingPosts();

// Try news first, fall back to evergreen
let topic = await fetchTrendingTopic();
if (!topic) {
  topic = pickEvergreen(recentTitles, recentCategories);
  console.log(`Evergreen topic: "${topic.title}" (industry: ${topic.industry})`);
} else {
  topic.industry = detectIndustry(topic.title);
}

const post = await generatePost(topic, recentTitles);

if (!post.title || !post.content || !post.slug) {
  throw new Error(`Missing required fields: ${JSON.stringify(Object.keys(post))}`);
}

// Deduplicate slug
let slug = slugify(post.slug || post.title);
const base = slug;
let n = 1;
while (existingIds.has(slug)) slug = `${base}-${n++}`;
post.slug = slug;

injectPost(post);
console.log(`Done. ID: ${post.slug} | Year refs: ${CURRENT_YEAR}`);
