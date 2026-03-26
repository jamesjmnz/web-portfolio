import type { CSSProperties, ReactNode } from "react"

type LogoNodeItem = {
  node: ReactNode
  title?: string
  href?: string
  ariaLabel?: string
}

type LogoImageItem = {
  src: string
  alt?: string
  href?: string
  title?: string
  srcSet?: string
  sizes?: string
  width?: number
  height?: number
}

export type LogoLoopItem = LogoNodeItem | LogoImageItem | Record<string, unknown>

export interface LogoLoopProps {
  logos: LogoLoopItem[]
  speed?: number
  direction?: "left" | "right" | "up" | "down"
  width?: number | string
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  hoverSpeed?: number
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  renderItem?: (item: any, key: string) => ReactNode
  ariaLabel?: string
  className?: string
  style?: CSSProperties
}

declare const LogoLoop: (props: LogoLoopProps) => ReactNode

export default LogoLoop
