"use server"

import { revalidatePath } from "next/cache"
import { mockPostsDb } from "./posts"
import type { Post } from "../types"

const currentUser = {
  name: "Sarah Chen",
  username: "sarahchen",
  avatarSrc: "https://github.com/shadcn.png",
  avatarAlt: "@sarahchen",
  avatarFallback: "SC",
  bio: "Software Engineer @Vercel. Building Next.js. Passionate about DX, UI design, and open source.",
  followingCount: 382,
  followersCount: 12400,
}

export async function submitReply(_prevState: unknown, formData: FormData) {
  const content = formData.get("content") as string
  const parentId = formData.get("parentId") as string

  if (!content?.trim() || !parentId) return null

  const newReply: Post = {
    id: `reply-${Date.now()}`,
    parentId,
    author: { ...currentUser },
    content: content.trim(),
    timestamp: new Date().toISOString(),
    replyCount: 0,
    repostCount: 0,
    likeCount: 0,
    viewCount: 0,
    shareCount: 0,
  }

  mockPostsDb.push(newReply)

  const parent = mockPostsDb.find((p) => p.id === parentId)
  if (parent) {
    parent.replyCount += 1
  }

  revalidatePath("/", "layout")
  return null
}
