import type { Post } from "@/features/post/types"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@workspace/ui/components/tabs"
import { PostList } from "@/features/post/components/post-list"

const posts: Post[] = [
  {
    id: "1",
    author: {
      name: "Sarah Chen",
      username: "sarahchen",
      avatarSrc: "https://github.com/shadcn.png",
      avatarAlt: "@sarahchen",
      avatarFallback: "SC",
      bio: "Software Engineer @Vercel. Building Next.js. Passionate about DX, UI design, and open source.",
      followingCount: 382,
      followersCount: 12400,
    },
    content:
      "Just shipped the new dashboard — real-time analytics, customizable widgets, and a dark mode that actually looks good. Spent the last two weeks refactoring the query layer and it was worth every minute. Performance is up 40% on the main feed.",
    timestamp: "2h",
    replyCount: 3,
    repostCount: 5,
    likeCount: 12,
    viewCount: 2100,
  },
  {
    id: "2",
    author: {
      name: "Marcus Rivera",
      username: "marcusdev",
      avatarSrc: "https://github.com/marcus.png",
      avatarAlt: "@marcusdev",
      avatarFallback: "MR",
      bio: "Full-stack developer & SQL optimizer. Loving Postgres, TypeScript, and Drizzle ORM.",
      followingCount: 512,
      followersCount: 8900,
    },
    content:
      "Hot take: type-safe SQL with Drizzle is significantly better than raw SQL strings in production.\n\nThe DX of autocomplete on your schema plus full TypeScript inference on queries catches so many edge cases before they reach staging.\n\nFight me.",
    timestamp: "5h",
    replyCount: 24,
    repostCount: 8,
    likeCount: 47,
    viewCount: 8300,
  },
  {
    id: "3",
    author: {
      name: "Aisha Patel",
      username: "aisha_designs",
      avatarSrc: "https://github.com/evilrabbit.png",
      avatarAlt: "@aisha_designs",
      avatarFallback: "AP",
      bio: "Product Designer. Creating simple, delightful interfaces. Passionate about design systems and PM.",
      followingCount: 890,
      followersCount: 45000,
    },
    content:
      "Redesigned the onboarding flow this sprint. Cut the steps from 6 to 3 and conversion went up 34%.\n\nLesson learned: every extra input field is a prayer that your user really wants to be there. When in doubt, remove.",
    timestamp: "1d",
    replyCount: 8,
    repostCount: 12,
    likeCount: 89,
    viewCount: 4500,
  },
  {
    id: "4",
    author: {
      name: "David Kim",
      username: "davidkim",
      avatarSrc: "https://github.com/davidkim.png",
      avatarAlt: "@davidkim",
      avatarFallback: "DK",
      bio: "Tech Lead at TechBlocks. Writer, builder, and mentor. Focus on shipping fast and scale.",
      followingCount: 142,
      followersCount: 534000,
    },
    content:
      "The best career advice I ever got:\n\nWrite more code that ships. Less code that's perfect.\n\nYou learn more from a deployed feature with real users than from a pristine codebase that never sees the light of day.\n\nAnother thing: don't over-engineer for hypothetical scenarios. Solve the problem in front of you, not the one you're imagining.",
    timestamp: "8h",
    replyCount: 4500,
    repostCount: 120000,
    likeCount: 534000,
    viewCount: 12400000,
  },
  {
    id: "5",
    author: {
      name: "Emma Wilson",
      username: "emma_w",
      avatarSrc: "https://github.com/emma-w.png",
      avatarAlt: "@emma_w",
      avatarFallback: "EW",
      bio: "Growth PM. Ex-Google, Ex-Stripe. Building conversion engines and scaling products.",
      followingCount: 620,
      followersCount: 1234567,
    },
    content:
      "Three things I've unlearned about product management:\n\n1. More features ≠ more value. Adding options doesn't make a product better, it makes it harder to use.\n\n2. Your users won't tell you what they need. Watch what they do, not what they say.\n\n3. Speed of iteration beats size of iteration. Small frequent releases > big bang launches.\n\nThe best products aren't the most feature-rich. They're the most focused on doing one thing exceptionally well.",
    timestamp: "12h",
    replyCount: 67000,
    repostCount: 89100,
    likeCount: 1234567,
    viewCount: 28100000,
  },
]

export default function Page() {
  return (
    <Tabs defaultValue="for-you" className="gap-0">
      <div className="sticky top-0 z-10 border-b bg-background p-4">
        <TabsList className="w-full">
          <TabsTrigger value="for-you">For you</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="for-you">
        <PostList posts={posts} />
      </TabsContent>
      <TabsContent value="following" />
    </Tabs>
  )
}
