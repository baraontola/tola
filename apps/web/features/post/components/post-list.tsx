import type { Post } from "../types"
import { PostCard } from "./post-card"

interface PostListProps {
  posts: Post[]
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className="p-4 text-sm text-muted-foreground">No posts yet</p>
  }

  return (
    <ol className="m-0 list-none p-0">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ol>
  )
}
