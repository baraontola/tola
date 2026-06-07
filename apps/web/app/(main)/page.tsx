import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@workspace/ui/components/tabs"
import { PostList } from "@/features/post/components/post-list"
import { getFeedPosts } from "@/features/post/lib/posts"

export default async function Page() {
  const posts = await getFeedPosts()

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
