'use client'

import { usePreview } from '../lib/sanity.preview'
import BlogList from './BlogList'

interface PreviewBlogListProps {
  query: string
}

function PreviewBlogList({ query }: PreviewBlogListProps) {
  const posts = usePreview(null, query)

  return <BlogList posts={posts} />
}

export default PreviewBlogList
