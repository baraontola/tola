import { Tabs, TabsList, TabsTrigger, TabsContent } from "@workspace/ui/components/tabs"

export default function Page() {
  return (
    <Tabs defaultValue="for-you">
      <div className="border-b p-4">
        <TabsList className="w-full">
          <TabsTrigger value="for-you">For you</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="for-you" />
      <TabsContent value="following" />
    </Tabs>
  )
}
