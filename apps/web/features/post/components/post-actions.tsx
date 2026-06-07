"use client"

import { useState } from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@workspace/ui/components/tooltip"
import { formatCompactNumber } from "@/lib/number"
import { toast } from "sonner"
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
  BookmarkOff,
  Ellipsis,
  Copy,
  Share2,
  UserMinus,
  Ban,
  Flag,
  FileText,
  EyeOff,
} from "lucide-react"

interface PostActionsProps {
  replyCount: number
  repostCount: number
  likeCount: number
  viewCount: number
  shareCount: number
  authorUsername: string
  postId: string
}

export function PostActions({
  replyCount,
  repostCount,
  likeCount,
  viewCount,
  shareCount,
  authorUsername,
  postId,
}: PostActionsProps) {
  const [isReposted, setIsReposted] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <Tooltip>
        <TooltipTrigger asChild>
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
        </TooltipTrigger>
        <TooltipContent>Reply</TooltipContent>
      </Tooltip>

      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
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
          </TooltipTrigger>
          <TooltipContent>Repost</TooltipContent>
        </Tooltip>
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

      <Tooltip>
        <TooltipTrigger asChild>
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
        </TooltipTrigger>
        <TooltipContent>{isLiked ? "Unlike" : "Like"}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size={viewCount > 0 ? "sm" : "icon-sm"}
            aria-label="Views"
          >
            <ChartNoAxesColumnIncreasing />
            {viewCount > 0 && (
              <span className="tabular-nums">
                {formatCompactNumber(viewCount)}
              </span>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Views</TooltipContent>
      </Tooltip>

      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size={shareCount > 0 ? "sm" : "icon-sm"}
                aria-label="Share"
              >
                <Share2 />
                {shareCount > 0 && (
                  <span className="tabular-nums">
                    {formatCompactNumber(shareCount)}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>Share</TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Share2 />
              Share
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                const postUrl = `${window.location.origin}/${authorUsername}/status/${postId}`
                navigator.clipboard
                  .writeText(postUrl)
                  .then(() => {
                    toast.success("Link copied to clipboard")
                  })
                  .catch((err) => {
                    toast.error("Failed to copy link")
                    console.error("Copy failed: ", err)
                  })
              }}
            >
              <Copy />
              Copy link
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm" aria-label="More">
                <Ellipsis />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent>More</TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => {
                setIsSaved(!isSaved)
                toast.success(
                  isSaved ? "Removed from Bookmarks" : "Saved to Bookmarks"
                )
              }}
            >
              {isSaved ? <BookmarkOff /> : <Bookmark />}
              {isSaved ? "Unsave" : "Save"}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                toast.success("Marked as not interested")
              }}
            >
              <EyeOff />
              Not interested
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem
              onClick={() => {
                toast.success(`Muted @${authorUsername}`, {
                  action: {
                    label: "Undo",
                    onClick: () => {
                      toast.success(`Unmuted @${authorUsername}`)
                    },
                  },
                })
              }}
            >
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
