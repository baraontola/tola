import { notFound } from "next/navigation"
import { getPostById, getRepliesByPostId } from "@/features/post/lib/posts"
import { PostCard } from "@/features/post/components/post-card"
import { BackButton } from "@/features/post/components/back-button"
import { ReplyComposer } from "@/features/post/components/reply-composer"

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

  const replies = await getRepliesByPostId(postId)

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center gap-2 border-b bg-background p-4">
        <BackButton />
        <h1 className="text-xl font-semibold">Post</h1>
      </div>

      {/* Main Post, Reply Area, and Thread Replies */}
      <div className="flex flex-col">
        <PostCard post={post} />

        {/* Separated Reply Composer Component */}
        <ReplyComposer />

        {replies.length > 0 && (
          <div className="flex flex-col">
            {replies.map((reply) => (
              <PostCard key={reply.id} post={reply} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
