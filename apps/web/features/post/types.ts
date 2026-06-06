export interface PostAuthor {
  name: string
  username: string
  avatarSrc: string
  avatarAlt: string
  avatarFallback: string
}

export interface Post {
  id: string
  author: PostAuthor
  content: string
  timestamp: string
  replyCount: number
  repostCount: number
  likeCount: number
  viewCount: number
}
