import type { Post } from "../types"
import { PostCard } from "./post-card"

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className="p-4 text-sm text-muted-foreground">No posts yet</p>
  }

  return posts.map((post) => <PostCard key={post.id} post={post} />)
}
