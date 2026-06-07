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
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    replyCount: 3,
    repostCount: 5,
    likeCount: 12,
    viewCount: 2100,
    shareCount: 2,
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
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    replyCount: 24,
    repostCount: 8,
    likeCount: 47,
    viewCount: 8300,
    shareCount: 0,
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
    timestamp: new Date(Date.now() - 25 * 60 * 60 * 1000).toISOString(),
    replyCount: 8,
    repostCount: 12,
    likeCount: 89,
    viewCount: 4500,
    shareCount: 5,
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
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    replyCount: 4500,
    repostCount: 120000,
    likeCount: 534000,
    viewCount: 12400000,
    shareCount: 94000,
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
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    replyCount: 67000,
    repostCount: 89100,
    likeCount: 1234567,
    viewCount: 28100000,
    shareCount: 12000,
  },
  {
    id: "6",
    author: {
      name: "Tola Builder",
      username: "tola_builder",
      avatarSrc: "https://github.com/tolabuilder.png",
      avatarAlt: "@tola_builder",
      avatarFallback: "TB",
      bio: "An empty post simulation tool to test 0 states and interaction behaviors.",
      followingCount: 1,
      followersCount: 1,
    },
    content:
      "Testing the zero state of actions. This post should render clean circular buttons with zero layout shifting. Click them to see the transition from circular icons to oblong pills with numeric values!",
    timestamp: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
    replyCount: 0,
    repostCount: 0,
    likeCount: 0,
    viewCount: 0,
    shareCount: 0,
  },
  {
    id: "7",
    author: {
      name: "Clara Oswald",
      username: "impossible_girl",
      avatarSrc: "https://github.com/clara.png",
      avatarAlt: "@impossible_girl",
      avatarFallback: "CO",
      bio: "Traveling through space and time. Sometimes solving SQL and UI issues.",
      followingCount: 120,
      followersCount: 9400,
    },
    content:
      "Mixed state test: 12 replies and 1500 views, but currently 0 reposts and 0 likes. Like and Repost this post to test dynamic shape shifting!",
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    replyCount: 12,
    repostCount: 0,
    likeCount: 0,
    viewCount: 1500,
    shareCount: 0,
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
