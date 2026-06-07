"use client"

import { useRouter } from "next/navigation"
import { Button } from "@workspace/ui/components/button"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => router.back()}
      aria-label="Back"
    >
      <ArrowLeft />
    </Button>
  )
}
