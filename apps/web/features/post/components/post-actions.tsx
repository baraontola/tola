"use client"

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
  return (
    <div className="flex items-center justify-between">
      <Button variant="ghost" size="sm">
        <MessageCircle />
        {formatCompactNumber(replyCount)}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <Repeat />
            {formatCompactNumber(repostCount)}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Repeat />
            Repost
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText />
            Quote
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" size="sm">
        <Heart />
        {formatCompactNumber(likeCount)}
      </Button>
      <Button variant="ghost" size="sm">
        <ChartNoAxesColumnIncreasing />
        {formatCompactNumber(viewCount)}
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Bookmark">
        <Bookmark />
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
