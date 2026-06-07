"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"
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
  const router = useRouter()
  const clickStartRef = useRef({ x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    clickStartRef.current = { x: e.clientX, y: e.clientY }
  }

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    // 1. Prevent navigation if the user is selecting text
    const selection = window.getSelection()
    if (selection && selection.toString().length > 0) {
      return
    }

    // 2. Prevent navigation if the user clicked on an interactive child element
    const target = e.target as HTMLElement
    const interactiveSelectors =
      "a, button, input, select, textarea, [role='button'], [role='menuitem']"
    if (target.closest(interactiveSelectors)) {
      return
    }

    // 3. Prevent navigation if it was a drag gesture (e.g., text selection drag or scroll drag)
    const deltaX = Math.abs(e.clientX - clickStartRef.current.x)
    const deltaY = Math.abs(e.clientY - clickStartRef.current.y)
    if (deltaX > 5 || deltaY > 5) {
      return
    }

    const postUrl = `/${post.author.username}/status/${post.id}`

    // 4. Handle middle click or modifier keys (Ctrl/Cmd/Shift) to open in a new tab
    if (e.button === 1 || e.ctrlKey || e.metaKey || e.shiftKey) {
      window.open(postUrl, "_blank")
    } else if (e.button === 0) {
      router.push(postUrl)
    }
  }

  return (
    <article
      onClick={handleCardClick}
      onAuxClick={handleCardClick}
      onMouseDown={handleMouseDown}
      className="group relative flex cursor-pointer items-start gap-2 border-b p-4 transition-colors hover:bg-accent/20"
    >
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
