import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import PreviewSuspense from '../../components/PreviewSuspense'
import PreviewBlogList from '../../components/PreviewBlogList'

const query = groq`
  *[_type=='post'] {
    ...,
    author->
    categories[]->
  } | order(_createdAt desc)
`

async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading preview data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)
  return (
    <div>
      <h1>Not in preview mode</h1>
    </div>
  )
}

export default HomePage
