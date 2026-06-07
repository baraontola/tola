import type { User } from "../../user/types"
import { UserHoverCard } from "../../user/components/user-hover-card"
import Link from "next/link"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@workspace/ui/components/tooltip"
import { formatPostDate, formatAbsoluteDate } from "@/lib/date"

interface PostHeaderProps {
  author: User
  timestamp: string
  postId: string
}

export function PostHeader({ author, timestamp, postId }: PostHeaderProps) {
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
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={`/${author.username}/status/${postId}`}
            className="text-muted-foreground hover:underline"
            prefetch={false}
            suppressHydrationWarning
          >
            {formatPostDate(timestamp)}
          </Link>
        </TooltipTrigger>
        <TooltipContent>{formatAbsoluteDate(timestamp)}</TooltipContent>
      </Tooltip>
    </div>
  )
}
