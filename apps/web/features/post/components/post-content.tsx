interface PostContentProps {
  children: string
}

export function PostContent({ children }: PostContentProps) {
  return <p className="text-sm whitespace-pre-wrap">{children}</p>
}
