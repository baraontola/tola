"use client"

import { useEffect } from "react"

interface ScrollToAnchorProps {
  anchorId: string
  headerId: string
}

export function ScrollToAnchor({ anchorId, headerId }: ScrollToAnchorProps) {
  useEffect(() => {
    const el = document.getElementById(anchorId)
    const header = document.getElementById(headerId)
    const spacer = document.getElementById("post-spacer")
    if (!el) return

    const setSpacerHeight = () => {
      if (!spacer || !header) return
      const headerHeight = header.getBoundingClientRect().height
      const viewportH = window.innerHeight
      const currentH = el.getBoundingClientRect().height
      const belowCurrent =
        spacer.getBoundingClientRect().top - el.getBoundingClientRect().bottom
      spacer.style.height = `${Math.max(0, viewportH - headerHeight - currentH - belowCurrent)}px`
    }

    requestAnimationFrame(() => {
      setSpacerHeight()

      const headerHeight = header?.getBoundingClientRect().height ?? 0
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight
      if (Math.abs(window.scrollY - top) > 1) {
        window.scrollTo({ top, behavior: "auto" })
      }
    })

    let ticking = false
    const onResize = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setSpacerHeight()
        ticking = false
      })
    }

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [anchorId, headerId])

  return null
}
