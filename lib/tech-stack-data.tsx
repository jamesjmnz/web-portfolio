import type { ComponentType } from "react"
import { Binary, SearchCode, Workflow } from "lucide-react"
import {
  SiCloudinary,
  SiCss,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFramer,
  SiGithub,
  SiGit,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiLangchain,
  SiLanggraph,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiReact,
  SiReactquery,
  SiRender,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si"

export type TechItem = {
  name: string
  icon: ComponentType<{ className?: string }>
  href: string
}

export type TechCategory = {
  title: string
  items: TechItem[]
}

export const techStackCategories: TechCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: SiHtml5, href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS", icon: SiCss, href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "JavaScript", icon: SiJavascript, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: SiTypescript, href: "https://www.typescriptlang.org" },
      { name: "React", icon: SiReact, href: "https://react.dev" },
      { name: "Next.js", icon: SiNextdotjs, href: "https://nextjs.org" },
      { name: "Tailwind CSS", icon: SiTailwindcss, href: "https://tailwindcss.com" },
      { name: "Framer Motion", icon: SiFramer, href: "https://www.framer.com/motion/" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, href: "https://nodejs.org" },
      { name: "Python", icon: SiPython, href: "https://www.python.org" },
      { name: "Express", icon: SiExpress, href: "https://expressjs.com" },
      { name: "PostgreSQL", icon: SiPostgresql, href: "https://www.postgresql.org" },
      { name: "FastAPI", icon: SiFastapi, href: "https://fastapi.tiangolo.com" },
      { name: "Prisma", icon: SiPrisma, href: "https://www.prisma.io" },
      { name: "Supabase", icon: SiSupabase, href: "https://supabase.com" },
      { name: "PHP", icon: SiPhp, href: "https://www.php.net" },
      { name: "MySQL", icon: SiMysql, href: "https://www.mysql.com" },
      { name: "MongoDB", icon: SiMongodb, href: "https://www.mongodb.com" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: SiDocker, href: "https://www.docker.com" },
      { name: "Cloudinary", icon: SiCloudinary, href: "https://cloudinary.com" },
      { name: "Vercel", icon: SiVercel, href: "https://vercel.com" },
      { name: "Render", icon: SiRender, href: "https://render.com" },
    ],
  },
  {
    title: "AI Development & RAG",
    items: [
      { name: "PyTorch", icon: SiPytorch, href: "https://pytorch.org" },
      { name: "LangChain", icon: SiLangchain, href: "https://www.langchain.com" },
      { name: "Transformers", icon: Binary, href: "https://huggingface.co/docs/transformers" },
      { name: "OpenAI", icon: SiOpenai, href: "https://openai.com" },
      { name: "Hugging Face", icon: SiHuggingface, href: "https://huggingface.co" },
      { name: "BeautifulSoup", icon: SearchCode, href: "https://www.crummy.com/software/BeautifulSoup/" },
      { name: "LangGraph", icon: SiLanggraph, href: "https://www.langchain.com/langgraph" },
    ],
  },
  {
    title: "DevTools",
    items: [
      { name: "Git", icon: SiGit, href: "https://git-scm.com" },
      { name: "GitHub", icon: SiGithub, href: "https://github.com" },
      { name: "Postman", icon: SiPostman, href: "https://www.postman.com" },
      { name: "TanStack Query", icon: SiReactquery, href: "https://tanstack.com/query/latest" },
      { name: "Zustand", icon: Workflow, href: "https://zustand.docs.pmnd.rs" },
    ],
  },
]

export const allTechItems = techStackCategories.flatMap((category) => category.items)

export const marqueeTechRows = [
  allTechItems.filter((_, index) => index % 2 === 0),
  allTechItems.filter((_, index) => index % 2 === 1),
]
