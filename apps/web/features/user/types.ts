export interface User {
  name: string
  username: string
  avatarSrc: string
  avatarAlt: string
  avatarFallback: string
  bio: string | null
  followersCount: number
  followingCount: number
}
