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
    openGraph: {
      title: `${post.title} | Zadix Blog`,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}