"use client"

import { useActionState } from "react"
import TextareaAutosize from "react-textarea-autosize"
import { PostAvatar } from "./post-avatar"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@workspace/ui/components/input-group"
import { UserHoverCard } from "../../user/components/user-hover-card"
import Link from "next/link"
import { Image, Smile, ListTodo, Calendar } from "lucide-react"
import { submitReply } from "@/features/post/lib/actions"

// Mock current user info for HoverCard
const currentUser = {
  name: "Sarah Chen",
  username: "sarahchen",
  avatarSrc: "https://github.com/shadcn.png",
  avatarAlt: "@sarahchen",
  avatarFallback: "SC",
  bio: "Software Engineer @Vercel. Building Next.js. Passionate about DX, UI design, and open source.",
  followingCount: 382,
  followersCount: 12400,
}

export function ReplyComposer({ postId }: { postId: string }) {
  const [, formAction, pending] = useActionState(submitReply, null)

  return (
    <form
      action={formAction}
      className="flex items-start gap-2 border-b bg-background p-4"
    >
      <input type="hidden" name="parentId" value={postId} />
      {/* Current User Avatar with UserHoverCard and Profile Link */}
      <UserHoverCard user={currentUser}>
        <Link
          href={`/${currentUser.username}`}
          className="flex shrink-0"
          prefetch={false}
        >
          <PostAvatar
            src={currentUser.avatarSrc}
            alt={currentUser.avatarAlt}
            fallback={currentUser.avatarFallback}
          />
        </Link>
      </UserHoverCard>

      {/* Input Group container (gap-1 removed as it is not used here) */}
      <div className="flex min-w-0 flex-1 flex-col">
        <InputGroup>
          <TextareaAutosize
            data-slot="input-group-control"
            className="flex field-sizing-content min-h-16 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
            placeholder="Post your reply..."
            name="content"
          />
          <InputGroupAddon align="block-end">
            <div className="flex gap-1">
              <InputGroupButton
                size="icon-sm"
                variant="ghost"
                aria-label="Add photo or video"
              >
                <Image />
              </InputGroupButton>
              <InputGroupButton
                size="icon-sm"
                variant="ghost"
                aria-label="Add emoji"
              >
                <Smile />
              </InputGroupButton>
              <InputGroupButton
                size="icon-sm"
                variant="ghost"
                aria-label="Add poll"
              >
                <ListTodo />
              </InputGroupButton>
              <InputGroupButton
                size="icon-sm"
                variant="ghost"
                aria-label="Schedule post"
              >
                <Calendar />
              </InputGroupButton>
            </div>
            <InputGroupButton
              className="ml-auto"
              size="sm"
              variant="default"
              type="submit"
              disabled={pending}
            >
              Reply
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </form>
  )
}
