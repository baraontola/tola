"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"
import { useState } from "react"
import { formatCompactNumber } from "@/lib/number"
import type { User } from "../types"

interface UserHoverCardProps {
  user: User
  children: React.ReactNode
}

export function UserHoverCard({ user, children }: UserHoverCardProps) {
  const [isFollowing, setIsFollowing] = useState(false)

  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="flex w-80 flex-col gap-2" align="start">
        <div className="flex items-start justify-between">
          <Link
            href={`/${user.username}`}
            className="flex shrink-0"
            prefetch={false}
          >
            <Avatar size="lg">
              <AvatarImage src={user.avatarSrc} alt={user.avatarAlt} />
              <AvatarFallback>{user.avatarFallback}</AvatarFallback>
            </Avatar>
          </Link>
          <Button
            size="sm"
            variant={isFollowing ? "outline" : "default"}
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </div>
        <div className="flex flex-col gap-0.5">
          <Link
            href={`/${user.username}`}
            className="text-base leading-tight font-semibold hover:underline"
            prefetch={false}
          >
            {user.name}
          </Link>
          <Link
            href={`/${user.username}`}
            className="text-sm text-muted-foreground hover:underline"
            prefetch={false}
          >
            @{user.username}
          </Link>
        </div>
        {user.bio && <p className="text-sm leading-normal">{user.bio}</p>}
        <div className="flex gap-4 text-sm">
          <Link
            href={`/${user.username}/following`}
            className="hover:underline"
            prefetch={false}
          >
            <span className="font-semibold text-foreground">
              {formatCompactNumber(user.followingCount)}
            </span>{" "}
            <span className="text-muted-foreground">Following</span>
          </Link>
          <Link
            href={`/${user.username}/followers`}
            className="hover:underline"
            prefetch={false}
          >
            <span className="font-semibold text-foreground">
              {formatCompactNumber(user.followersCount)}
            </span>{" "}
            <span className="text-muted-foreground">Followers</span>
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
