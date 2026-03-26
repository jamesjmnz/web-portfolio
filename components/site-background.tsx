"use client"

import ShapeGrid from "@/components/ShapeGrid"

export function SiteBackground() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
      <ShapeGrid
        speed={0}
        squareSize={10}
        direction="right"
        borderColor="#0e0e0e
"
        hoverFillColor="#111111"
        shape="square"
        hoverTrailAmount={0}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.18)_55%,rgba(5,5,5,0.78)_100%)]" />
    </div>
  )
}
