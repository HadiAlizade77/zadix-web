#!/usr/bin/env node
// scripts/generate-post.mjs
// Fetches trending AI/automation news → generates SEO blog post via Claude → injects into blog-data.ts

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DATA_PATH = join(__dirname, '..', 'lib', 'blog-data.ts');

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const NEWSAPI_KEY        = process.env.NEWSAPI_KEY;

if (!OPENROUTER_API_KEY || !NEWSAPI_KEY) {
  console.error('ERROR: Set OPENROUTER_API_KEY and NEWSAPI_KEY environment variables.');
  process.exit(1);
}

// ─── news search rotation ────────────────────────────────────────────────────
const SEARCH_TOPICS = [
  'AI automation business operations',
  'workflow automation enterprise productivity',
  'artificial intelligence business processes',
  'business process automation ROI',
  'AI tools real estate sales',
  'logistics freight automation technology',
  'SaaS sales automation pipeline',
  'agentic AI enterprise operations',
  'document processing AI automation',
  'lead qualification artificial intelligence',
  'AI automation cost savings 2024',
  'no-code automation small business',
];

// Used when news API returns nothing relevant
const EVERGREEN_TOPICS = [
  'The Hidden Cost of Manual Data Entry That No One Talks About',
  'Why Your Sales Team Loses 40% of Leads After Business Hours',
  'From Email Inbox to CRM: Automating the Last Manual Step',
  '5 Business Processes You Should Automate This Quarter',
  'What is Agentic AI and Why Every Ops Team Needs It Now',
  'How Freight Forwarders Win 30% More Business with Automation',
  'AI-Powered Lead Qualification: Never Miss a Hot Prospect Again',
  'The 7-Day Automation: From Scope to Production in One Week',
  'Why 80% of AI Projects Never Reach Production (And How to Fix It)',
  'Automating the RFQ Process: A Logistics Case Study',
  'How Dubai Real Estate Agencies Are Qualifying Leads 10x Faster',
  'The ROI of Automation: A 30-Day Measurement Framework',
  'Human-in-the-Loop AI: Why Approval Workflows Are Non-Negotiable',
  'Investment Memo Automation: From CIM to IC Deck in 20 Minutes',
  'Contract Review AI: How Law Firms Cut Document Review Time by 70%',
];

// ─── fetch trending news ─────────────────────────────────────────────────────
async function fetchTrendingTopic() {
  const query = SEARCH_TOPICS[Math.floor(Math.random() * SEARCH_TOPICS.length)];
  console.log(`Searching news for: "${query}"`);

  try {
    const res = await fetch('https://newsapi.ai/api/v1/article/getArticles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'getArticles',
        keyword: query,
        articlesPage: 1,
        articlesCount: 20,
        articlesSortBy: 'date',
        dataType: ['news'],
        lang: 'eng',
        apiKey: NEWSAPI_KEY,
      }),
    });

    if (!res.ok) throw new Error(`NewsAPI status ${res.status}`);

    const data = await res.json();
    const articles = data?.articles?.results ?? [];

    // Filter for genuinely relevant articles
    const relevant = articles.filter(a => {
      const text = ((a.title || '') + ' ' + (a.body || '')).toLowerCase();
      return (
        text.includes('ai') ||
        text.includes('automat') ||
        text.includes('workflow') ||
        text.includes('machine learning') ||
        text.includes('productiv') ||
        text.includes('operational') ||
        text.includes('efficiency')
      );
    });

    if (relevant.length === 0) throw new Error('No relevant articles found');

    const picked = relevant[Math.floor(Math.random() * Math.min(relevant.length, 5))];
    console.log(`Trending article: "${picked.title}" (${picked.source?.title ?? 'unknown source'})`);

    return {
      title:   picked.title || '',
      summary: (picked.body || '').slice(0, 600),
      source:  picked.source?.title || 'Industry News',
    };
  } catch (err) {
    console.warn(`News API failed (${err.message}) — using evergreen topic.`);
    const topic = EVERGREEN_TOPICS[Math.floor(Math.random() * EVERGREEN_TOPICS.length)];
    return { title: topic, summary: '', source: 'Evergreen' };
  }
}

// ─── read existing post IDs to avoid duplicates ─────────────────────────────
function getExistingIds() {
  const content = readFileSync(BLOG_DATA_PATH, 'utf8');
  const matches = [...content.matchAll(/id:\s*["']([^"']+)["']/g)];
  return new Set(matches.map(m => m[1]));
}

// ─── slug generator ──────────────────────────────────────────────────────────
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 60)
    .replace(/-$/, '');
}

// ─── generate post via Claude (OpenRouter) ───────────────────────────────────
async function generatePost(trendingTopic) {
  const authors = ['Hadi Alizadeh', 'Engineering Team'];
  const author  = authors[Math.floor(Math.random() * 2)];

  const systemPrompt = `You are a senior content strategist for Zadix, a global AI automation agency. Zadix builds production-ready automations for businesses in real estate, logistics, SaaS, investment, legal, healthcare, and construction. Key facts:
- Automations cut manual work 50–80%
- Delivered in 7–14 business days
- Full source code ownership on delivery
- 30-day value guarantee
- Clients in UAE, UK, US, Europe and globally
- Website: zadix.ai, demo booking: zadix.ai/contact

Your writing style: authoritative, data-driven, practical. You speak to operations managers and business owners who are skeptical of AI hype but open to proven results. Never sound salesy — earn trust by being useful first.`;

  const userPrompt = `Write a high-quality, SEO-optimised blog post based on this trending topic:

TOPIC: "${trendingTopic.title}"
CONTEXT: ${trendingTopic.summary ? trendingTopic.summary : 'No additional context — write based on the topic title alone.'}
AUTHOR: ${author}

REQUIREMENTS:
• 950–1200 words total
• Target keyword must appear in title, first paragraph, and 2–3 headings naturally
• Include at least one specific number, stat, or business outcome per section
• Use ## for H2 headings — no H1 in body (title handles that)
• Use bullet points and **bold text** for scannability
• Each section must add genuine value — no filler
• The CTA section must feel earned, not bolted on

MANDATORY STRUCTURE (use these exact heading formats):
## The Problem
## Why Existing Approaches Fall Short
## How AI Automation Changes the Picture
## A Real-World Example
## How to Get Started in 7 Days
## Ready to Automate? (end with 2–3 sentences mentioning Zadix and a link to zadix.ai/contact for a free 20-min scoping call)

SEO RULES:
• Title: keyword near front, max 65 chars, specific and compelling (not generic)
• Meta description: 140–155 chars, includes keyword, creates curiosity or urgency
• Slug: lowercase, hyphens, max 55 chars

Return ONLY valid raw JSON — no markdown fences, no explanation, nothing before or after the JSON object:
{
  "title": "...",
  "slug": "...",
  "excerpt": "...",
  "category": "Strategy | Engineering | Case Study | Industry Insights",
  "readTime": "X min read",
  "author": "${author}",
  "content": "full markdown as single string with real newlines"
}`;

  console.log('Calling Claude via OpenRouter...');

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization':  `Bearer ${OPENROUTER_API_KEY}`,
      'Content-Type':   'application/json',
      'HTTP-Referer':   'https://zadix.ai',
      'X-Title':        'Zadix Auto Blog',
    },
    body: JSON.stringify({
      model:       'anthropic/claude-opus-4',
      messages:    [
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

  // Strip accidental markdown fences
  const cleaned = raw
    .replace(/^```(?:json)?\s*/m, '')
    .replace(/\s*```$/m, '')
    .trim();

  return JSON.parse(cleaned);
}

// ─── inject post into blog-data.ts ──────────────────────────────────────────
function escapeForTemplateLiteral(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function injectPost(post) {
  const file = readFileSync(BLOG_DATA_PATH, 'utf8');

  const entry = [
    `  {`,
    `    id: ${JSON.stringify(post.slug)},`,
    `    title: ${JSON.stringify(post.title)},`,
    `    author: ${JSON.stringify(post.author)},`,
    `    date: '${new Date().toISOString().split('T')[0]}',`,
    `    readTime: ${JSON.stringify(post.readTime)},`,
    `    category: ${JSON.stringify(post.category)},`,
    `    excerpt: ${JSON.stringify(post.excerpt)},`,
    `    content: \`${escapeForTemplateLiteral(post.content)}\`,`,
    `  },`,
  ].join('\n');

  const MARKER = 'export const blogPosts: BlogPost[] = [';
  const idx = file.indexOf(MARKER);
  if (idx === -1) throw new Error('Cannot find blogPosts array in blog-data.ts');

  const insertAt = idx + MARKER.length;
  const updated  = file.slice(0, insertAt) + '\n' + entry + '\n' + file.slice(insertAt);

  writeFileSync(BLOG_DATA_PATH, updated, 'utf8');
  console.log(`✓ Published: "${post.title}"`);
}

// ─── main ────────────────────────────────────────────────────────────────────
const trending   = await fetchTrendingTopic();
const existingIds = getExistingIds();

const post = await generatePost(trending);

if (!post.title || !post.content || !post.slug) {
  throw new Error(`Generated post missing required fields: ${JSON.stringify(Object.keys(post))}`);
}

// Deduplicate slug
let slug = slugify(post.slug || post.title);
let suffix = 1;
const baseSlug = slug;
while (existingIds.has(slug)) {
  slug = `${baseSlug}-${suffix++}`;
}
post.slug = slug;

injectPost(post);
console.log(`Done. Post ID: ${post.slug}`);
