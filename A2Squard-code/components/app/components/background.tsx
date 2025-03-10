"use client"

import { useEffect, useRef } from "react"

export default function Background() {
  const spaceRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!spaceRef.current) return

    const space = spaceRef.current
    const starCount = 200

    // Clear any existing stars
    while (space.firstChild) {
      space.removeChild(space.firstChild)
    }

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"

      // Random position
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`

      // Random size
      const size = `${0.1 + Math.random() * 0.4}rem`
      star.style.width = size
      star.style.height = size

      // Random animation delay
      star.style.animationDelay = `${Math.random() * 5}s`

      space.appendChild(star)
    }

    // Create waves
    const wave1 = document.createElement("div")
    wave1.className = "wave"
    space.appendChild(wave1)

    const wave2 = document.createElement("div")
    wave2.className = "wave"
    space.appendChild(wave2)
  }, [])

  return <div ref={spaceRef} className="space-bg" />
}

