import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPost from '@/components/pages/BlogPost'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog-data'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Blog Post Not Found | Zadix',
    }
  }

  return {
    title: `${post.title} | Zadix Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://zadix.ai/blog/${post.id}`,
    },
    openGraph: {
      title: `${post.title} | Zadix Blog`,
      description: post.excerpt,
      url: `https://zadix.ai/blog/${post.id}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: ['AI Automation', 'Workflow Automation', post.category],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Zadix',
      logo: {
        '@type': 'ImageObject',
        url: 'https://zadix.ai/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    url: `https://zadix.ai/blog/${post.id}`,
    mainEntityOfPage: `https://zadix.ai/blog/${post.id}`,
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header locale="en" />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}