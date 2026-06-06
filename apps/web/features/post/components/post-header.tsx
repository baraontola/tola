import type { User } from "../../user/types"
import { UserHoverCard } from "../../user/components/user-hover-card"
import Link from "next/link"

interface PostHeaderProps {
  author: User
  timestamp: string
}

export function PostHeader({ author, timestamp }: PostHeaderProps) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <UserHoverCard user={author}>
        <Link
          href={`/${author.username}`}
          className="font-semibold hover:underline"
          prefetch={false}
        >
          {author.name}
        </Link>
      </UserHoverCard>
      <UserHoverCard user={author}>
        <Link
          href={`/${author.username}`}
          className="text-muted-foreground hover:underline"
          prefetch={false}
        >
          @{author.username}
        </Link>
      </UserHoverCard>
      <span className="text-muted-foreground">·</span>
      <span className="text-muted-foreground">{timestamp}</span>
    </div>
  )
}
