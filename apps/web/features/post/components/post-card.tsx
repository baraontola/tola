import type { Post } from "../types"
import { PostAvatar } from "./post-avatar"
import { PostHeader } from "./post-header"
import { PostContent } from "./post-content"
import { PostActions } from "./post-actions"
import { UserHoverCard } from "../../user/components/user-hover-card"
import Link from "next/link"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex items-start gap-2 border-b p-4">
      <UserHoverCard user={post.author}>
        <Link
          href={`/${post.author.username}`}
          className="flex shrink-0"
          prefetch={false}
        >
          <PostAvatar
            src={post.author.avatarSrc}
            alt={post.author.avatarAlt}
            fallback={post.author.avatarFallback}
          />
        </Link>
      </UserHoverCard>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <PostHeader
          author={post.author}
          timestamp={post.timestamp}
          postId={post.id}
        />
        <PostContent>{post.content}</PostContent>
        <PostActions
          replyCount={post.replyCount}
          repostCount={post.repostCount}
          likeCount={post.likeCount}
          viewCount={post.viewCount}
          shareCount={post.shareCount}
          authorUsername={post.author.username}
          postId={post.id}
        />
      </div>
    </article>
  )
}
