"use client"

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@workspace/ui/components/avatar"

interface PostAvatarProps {
  src: string
  alt: string
  fallback: string
}

export function PostAvatar({ src, alt, fallback }: PostAvatarProps) {
  return (
    <Avatar size="lg">
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  )
}
