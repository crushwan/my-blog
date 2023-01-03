import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from "../../lib/sanity.client";
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import SideList from "../../components/SideList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export const revalidate = 86400 ;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={
        <div role="status">
          <p className="text-center text-lg animate-pulse">
            Loading Preview...
          </p>
        </div>
      }>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query);
  
  return (
    <div className="grid xl:grid-cols-5">
      <div className="xl:col-span-4">
        <BlogList posts={posts} />
      </div>
      <div className="hidden xl:block xl:col-span-1">
        <SideList posts={posts} />
      </div>
    </div>
  )
}
