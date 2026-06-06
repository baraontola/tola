import type { Post } from "../types"
import { PostAvatar } from "./post-avatar"
import { PostHeader } from "./post-header"
import { PostContent } from "./post-content"
import { PostActions } from "./post-actions"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex gap-2 border-b p-4">
      <PostAvatar
        src={post.author.avatarSrc}
        alt={post.author.avatarAlt}
        fallback={post.author.avatarFallback}
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <PostHeader
          name={post.author.name}
          username={post.author.username}
          timestamp={post.timestamp}
        />
        <PostContent>{post.content}</PostContent>
        <PostActions
          replyCount={post.replyCount}
          repostCount={post.repostCount}
          likeCount={post.likeCount}
          viewCount={post.viewCount}
          authorUsername={post.author.username}
        />
      </div>
    </article>
  )
}
