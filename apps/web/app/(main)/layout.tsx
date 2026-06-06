export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl">
      <aside className="hidden w-80 border-r lg:block" />
      <main className="min-w-0 flex-1">{children}</main>
      <aside className="hidden w-80 border-l xl:block" />
    </div>
  )
}
