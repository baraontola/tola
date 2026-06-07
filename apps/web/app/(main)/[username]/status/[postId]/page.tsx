import { notFound } from "next/navigation"
import {
  getPostById,
  getAncestors,
  getRepliesByPostId,
} from "@/features/post/lib/posts"
import { PostCard } from "@/features/post/components/post-card"
import { BackButton } from "@/features/post/components/back-button"
import { ReplyComposer } from "@/features/post/components/reply-composer"
import { ScrollToAnchor } from "@/features/post/components/scroll-to-anchor"

interface PageProps {
  params: Promise<{
    username: string
    postId: string
  }>
}

export default async function PostDetailPage({ params }: PageProps) {
  const { postId } = await params

  const post = await getPostById(postId)

  if (!post) {
    notFound()
  }

  const [ancestors, replies] = await Promise.all([
    getAncestors(postId),
    getRepliesByPostId(postId),
  ])

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header
        id="post-detail-header"
        className="sticky top-0 z-10 flex items-center gap-2 border-b bg-background p-4"
      >
        <BackButton />
        <h1 className="text-xl font-semibold">Post</h1>
      </header>

      {/* Main Post, Reply Area, and Thread Replies */}
      <div className="flex flex-col">
        {ancestors.length > 0 && (
          <section className="flex flex-col" aria-label="Thread ancestors">
            {ancestors.map((ancestor) => (
              <PostCard key={ancestor.id} post={ancestor} noBorder />
            ))}
          </section>
        )}

        <div id={`current-post-${postId}`}>
          <PostCard post={post} disableNavigation noBorder />
        </div>

        {ancestors.length > 0 && (
          <ScrollToAnchor
            anchorId={`current-post-${postId}`}
            headerId="post-detail-header"
          />
        )}

        {/* Separated Reply Composer Component */}
        <ReplyComposer postId={postId} />

        {replies.length > 0 && (
          <section className="flex flex-col" aria-label="Replies">
            {replies.map((reply) => (
              <PostCard key={reply.id} post={reply} />
            ))}
          </section>
        )}

        {ancestors.length > 0 && <div id="post-spacer" />}
      </div>
    </div>
  )
}
