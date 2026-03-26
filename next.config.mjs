import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Avoid picking a parent lockfile (e.g. ~/package-lock.json) as the workspace root.
  turbopack: {
    root: __dirname,
  },
}

export default nextConfig
