"use client"

import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import { formatCompactNumber } from "@/lib/number"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@workspace/ui/components/dropdown-menu"
import {
  MessageCircle,
  Repeat,
  Heart,
  ChartNoAxesColumnIncreasing,
  Bookmark,
  Ellipsis,
  Copy,
  Share2,
  UserMinus,
  Ban,
  Flag,
  FileText,
} from "lucide-react"

interface PostActionsProps {
  replyCount: number
  repostCount: number
  likeCount: number
  viewCount: number
  authorUsername: string
}

export function PostActions({
  replyCount,
  repostCount,
  likeCount,
  viewCount,
  authorUsername,
}: PostActionsProps) {
  const [isReposted, setIsReposted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <Button
        variant="ghost"
        size={replyCount > 0 ? "sm" : "icon-sm"}
        aria-label="Reply"
      >
        <MessageCircle />
        {replyCount > 0 && (
          <span className="tabular-nums">
            {formatCompactNumber(replyCount)}
          </span>
        )}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={isReposted ? "secondary" : "ghost"}
            size={repostCount + (isReposted ? 1 : 0) > 0 ? "sm" : "icon-sm"}
            aria-label="Repost"
            aria-pressed={isReposted}
          >
            <Repeat />
            {repostCount + (isReposted ? 1 : 0) > 0 && (
              <span className="tabular-nums">
                {formatCompactNumber(repostCount + (isReposted ? 1 : 0))}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => setIsReposted(!isReposted)}>
              <Repeat />
              {isReposted ? "Undo Repost" : "Repost"}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileText />
              Quote
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant={isLiked ? "secondary" : "ghost"}
        size={likeCount + (isLiked ? 1 : 0) > 0 ? "sm" : "icon-sm"}
        onClick={() => setIsLiked(!isLiked)}
        aria-label="Like"
        aria-pressed={isLiked}
      >
        <Heart className={isLiked ? "fill-current" : ""} />
        {likeCount + (isLiked ? 1 : 0) > 0 && (
          <span className="tabular-nums">
            {formatCompactNumber(likeCount + (isLiked ? 1 : 0))}
          </span>
        )}
      </Button>
      <Button
        variant="ghost"
        size={viewCount > 0 ? "sm" : "icon-sm"}
        aria-label="Views"
      >
        <ChartNoAxesColumnIncreasing />
        {viewCount > 0 && (
          <span className="tabular-nums">{formatCompactNumber(viewCount)}</span>
        )}
      </Button>
      <Button
        variant={isSaved ? "secondary" : "ghost"}
        size="icon-sm"
        aria-label="Bookmark"
        onClick={() => setIsSaved(!isSaved)}
        aria-pressed={isSaved}
      >
        <Bookmark className={isSaved ? "fill-current" : ""} />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="More">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Share2 />
              Share
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Copy />
              Copy link
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <UserMinus />
              Mute @{authorUsername}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Ban />
              Block @{authorUsername}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Flag />
              Report post
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
