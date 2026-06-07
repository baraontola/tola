import type { User } from "../user/types"

export interface Post {
  id: string
  author: User
  content: string
  timestamp: string
  replyCount: number
  repostCount: number
  likeCount: number
  viewCount: number
  shareCount: number
}
