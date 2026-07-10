"use client"

import { useEffect, useRef } from "react"

type ZohoFormEmbedProps = {
  src: string
  title: string
  initialHeight?: number
}

export function ZohoFormEmbed({ src, title, initialHeight = 858 }: ZohoFormEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const url = src.includes("zf_rszfm=")
    ? src
    : src + (src.includes("?") ? "&" : "?") + "zf_rszfm=1"

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (typeof event.data === "string" && event.data.includes("|")) {
        const height = parseInt(event.data.split("|")[1], 10)
        if (!Number.isNaN(height) && iframeRef.current) {
          iframeRef.current.style.height = height + 15 + "px"
        }
      }
    }
    window.addEventListener("message", handleMessage, false)
    return () => window.removeEventListener("message", handleMessage, false)
  }, [])

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-card">
      <iframe
        ref={iframeRef}
        title={title}
        src={url}
        className="w-full border-none"
        style={{ height: initialHeight + "px" }}
      />
    </div>
  )
}
