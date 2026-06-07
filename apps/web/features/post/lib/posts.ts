import type { Post } from "../types"

// A mock database of posts. Main posts and replies live in the same structure.
export const mockPostsDb: Post[] = [
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
    replyCount: 2,
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
    replyCount: 1,
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

  // REPLIES (Parent ID links them to main posts)
  {
    id: "101",
    parentId: "1",
    author: {
      name: "Alex Rivera",
      username: "alex_r",
      avatarSrc: "https://github.com/shadcn.png",
      avatarAlt: "@alex_r",
      avatarFallback: "AR",
      bio: "Frontend Developer. Love Tailwind, Next.js, and React.",
      followingCount: 120,
      followersCount: 450,
    },
    content: "This is a massive speedup! Clean dark mode is also a huge plus.",
    timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(),
    replyCount: 0,
    repostCount: 0,
    likeCount: 4,
    viewCount: 180,
    shareCount: 0,
  },
  {
    id: "102",
    parentId: "1",
    author: {
      name: "Sophia Martinez",
      username: "sophia_m",
      avatarSrc: "https://github.com/shadcn.png",
      avatarAlt: "@sophia_m",
      avatarFallback: "SM",
      bio: "Data Analyst and Tech Writer. Bridging code and communication.",
      followingCount: 300,
      followersCount: 1200,
    },
    content: "Did the performance improvement affect the bundle size at all?",
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    replyCount: 1,
    repostCount: 0,
    likeCount: 2,
    viewCount: 95,
    shareCount: 0,
  },
  {
    id: "201",
    parentId: "2",
    author: {
      name: "Tariq Dev",
      username: "tariq",
      avatarSrc: "https://github.com/shadcn.png",
      avatarAlt: "@tariq",
      avatarFallback: "TD",
      bio: "Backend Architect & Postgres optimizer.",
      followingCount: 88,
      followersCount: 310,
    },
    content:
      "Fully agree! Prisma is nice, but Drizzle feels much closer to SQL.",
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    replyCount: 0,
    repostCount: 1,
    likeCount: 8,
    viewCount: 210,
    shareCount: 0,
  },

  // ADDITIONAL REPLIES FOR POST 1 (to test scrolling)
  {
    id: "103",
    parentId: "1",
    author: {
      name: "David Kim",
      username: "davidkim",
      avatarSrc: "https://github.com/davidkim.png",
      avatarAlt: "@davidkim",
      avatarFallback: "DK",
      bio: "Tech Lead. Focus on shipping fast.",
      followingCount: 142,
      followersCount: 534000,
    },
    content: "Excellent points! The dx improvement is real.",
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    replyCount: 0,
    repostCount: 0,
    likeCount: 3,
    viewCount: 65,
    shareCount: 0,
  },
  {
    id: "104",
    parentId: "1",
    author: {
      name: "Emma Wilson",
      username: "emma_w",
      avatarSrc: "https://github.com/emma-w.png",
      avatarAlt: "@emma_w",
      avatarFallback: "EW",
      bio: "Product Manager. Ex-Google.",
      followingCount: 620,
      followersCount: 1234567,
    },
    content: "Will this new dashboard be rolled out to all teams by next week?",
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    replyCount: 0,
    repostCount: 0,
    likeCount: 10,
    viewCount: 110,
    shareCount: 0,
  },
  {
    id: "105",
    parentId: "1",
    author: {
      name: "Aisha Patel",
      username: "aisha_designs",
      avatarSrc: "https://github.com/evilrabbit.png",
      avatarAlt: "@aisha_designs",
      avatarFallback: "AP",
      bio: "Product Designer.",
      followingCount: 890,
      followersCount: 45000,
    },
    content: "The transitions are super slick. Love the layout structure!",
    timestamp: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    replyCount: 0,
    repostCount: 0,
    likeCount: 1,
    viewCount: 45,
    shareCount: 0,
  },
  {
    id: "106",
    parentId: "1",
    author: {
      name: "Tola Builder",
      username: "tola_builder",
      avatarSrc: "https://github.com/tolabuilder.png",
      avatarAlt: "@tola_builder",
      avatarFallback: "TB",
      bio: "Simulation tool.",
      followingCount: 1,
      followersCount: 1,
    },
    content:
      "Testing performance on different network conditions. Loading speeds are consistent.",
    timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    replyCount: 0,
    repostCount: 0,
    likeCount: 0,
    viewCount: 12,
    shareCount: 0,
  },
  {
    id: "107",
    parentId: "1",
    author: {
      name: "Clara Oswald",
      username: "impossible_girl",
      avatarSrc: "https://github.com/clara.png",
      avatarAlt: "@impossible_girl",
      avatarFallback: "CO",
      bio: "Traveling through space and time.",
      followingCount: 120,
      followersCount: 9400,
    },
    content: "This is brilliant, Sarah! Congrats on shipping it.",
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    replyCount: 0,
    repostCount: 0,
    likeCount: 2,
    viewCount: 30,
    shareCount: 0,
  },

  // DEEP NESTED THREAD: 102 -> 1021 -> 10211 -> 102111
  {
    id: "1021",
    parentId: "102",
    author: {
      name: "Sarah Chen",
      username: "sarahchen",
      avatarSrc: "https://github.com/shadcn.png",
      avatarAlt: "@sarahchen",
      avatarFallback: "SC",
      bio: "Software Engineer @Vercel. Building Next.js.",
      followingCount: 382,
      followersCount: 12400,
    },
    content:
      "Hey Sophia! No, we actually optimized bundle size further, it went down by about 5kb.",
    timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
    replyCount: 1,
    repostCount: 0,
    likeCount: 3,
    viewCount: 80,
    shareCount: 0,
  },
  {
    id: "10211",
    parentId: "1021",
    author: {
      name: "Sophia Martinez",
      username: "sophia_m",
      avatarSrc: "https://github.com/shadcn.png",
      avatarAlt: "@sophia_m",
      avatarFallback: "SM",
      bio: "Data Analyst and Tech Writer.",
      followingCount: 300,
      followersCount: 1200,
    },
    content:
      "Wow, that's impressive! 5kb reduction while adding features is black magic. teach me!",
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    replyCount: 1,
    repostCount: 0,
    likeCount: 1,
    viewCount: 50,
    shareCount: 0,
  },
  {
    id: "102111",
    parentId: "10211",
    author: {
      name: "Sarah Chen",
      username: "sarahchen",
      avatarSrc: "https://github.com/shadcn.png",
      avatarAlt: "@sarahchen",
      avatarFallback: "SC",
      bio: "Software Engineer @Vercel. Building Next.js.",
      followingCount: 382,
      followersCount: 12400,
    },
    content:
      "Haha, mostly just code splitting, lazy loading widgets, and aggressive tree shaking!",
    timestamp: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
    replyCount: 0,
    repostCount: 0,
    likeCount: 2,
    viewCount: 40,
    shareCount: 0,
  },

  // 10-level chain: Deep Root -> D1 -> D2 -> ... -> D9
  ...[
    {
      id: "9",
      depth: 0,
      parentId: null as string | null,
      name: "Deep Root",
      username: "deep_root",
      letter: "A",
    },
    {
      id: "91",
      depth: 1,
      parentId: "9",
      name: "Deep 1",
      username: "deep_1",
      letter: "B",
    },
    {
      id: "92",
      depth: 2,
      parentId: "91",
      name: "Deep 2",
      username: "deep_2",
      letter: "C",
    },
    {
      id: "93",
      depth: 3,
      parentId: "92",
      name: "Deep 3",
      username: "deep_3",
      letter: "D",
    },
    {
      id: "94",
      depth: 4,
      parentId: "93",
      name: "Deep 4",
      username: "deep_4",
      letter: "E",
    },
    {
      id: "95",
      depth: 5,
      parentId: "94",
      name: "Deep 5",
      username: "deep_5",
      letter: "F",
    },
    {
      id: "96",
      depth: 6,
      parentId: "95",
      name: "Deep 6",
      username: "deep_6",
      letter: "G",
    },
    {
      id: "97",
      depth: 7,
      parentId: "96",
      name: "Deep 7",
      username: "deep_7",
      letter: "H",
    },
    {
      id: "98",
      depth: 8,
      parentId: "97",
      name: "Deep 8",
      username: "deep_8",
      letter: "I",
    },
    {
      id: "99",
      depth: 9,
      parentId: "98",
      name: "Deep 9",
      username: "deep_9",
      letter: "J",
    },
  ].map(({ id, depth, parentId, name, username, letter }) => ({
    id,
    ...(parentId ? { parentId } : {}),
    author: {
      name,
      username,
      avatarSrc: "https://github.com/shadcn.png",
      avatarAlt: `@${username}`,
      avatarFallback: letter,
      bio: `Post ${letter} — depth ${depth}${depth === 0 ? ", root" : `. Parent: ${String.fromCharCode(64 + depth)}`}.`,
      followingCount: 100 - depth * 10,
      followersCount: 500 - depth * 50,
    },
    content: `Ini adalah Post ${letter}.${depth === 0 ? " Saya root dari thread ini." : ` Saya membalas Post ${String.fromCharCode(64 + depth)}.`}`,
    timestamp: new Date(
      Date.now() - (60 - depth * 5) * 60 * 1000
    ).toISOString(),
    replyCount: depth < 9 ? 1 : 0,
    repostCount: 0,
    likeCount: 10 - depth,
    viewCount: 200 - depth * 20,
    shareCount: 0,
  })),
]

// Data Access Layer (mimicking production queries)

export async function getFeedPosts(): Promise<Post[]> {
  // Return only top-level posts (no parentId)
  return mockPostsDb.filter((post) => !post.parentId)
}

export async function getPostById(id: string): Promise<Post | null> {
  const post = mockPostsDb.find((post) => post.id === id)
  return post || null
}

export async function getAncestors(postId: string): Promise<Post[]> {
  const ancestors: Post[] = []
  let currentId: string | undefined = postId

  while (currentId) {
    const post = mockPostsDb.find((p) => p.id === currentId)
    if (!post?.parentId) break
    const parent = mockPostsDb.find((p) => p.id === post.parentId)
    if (!parent) break
    ancestors.unshift(parent)
    currentId = parent.id
  }

  return ancestors
}

export async function getRepliesByPostId(postId: string): Promise<Post[]> {
  return mockPostsDb
    .filter((post) => post.parentId === postId)
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
}
