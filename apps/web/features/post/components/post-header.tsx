interface PostHeaderProps {
  name: string
  username: string
  timestamp: string
}

export function PostHeader({ name, username, timestamp }: PostHeaderProps) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="font-semibold">{name}</span>
      <span className="text-muted-foreground">@{username}</span>
      <span className="text-muted-foreground">·</span>
      <span className="text-muted-foreground">{timestamp}</span>
    </div>
  )
}
