import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    title: "The Future of Work: An Intro to Multi-AI Agents",
    date: "July 22, 2025",
    snippet:
      "Explore how collaborative AI agents are revolutionizing business productivity and what it means for your team.",
    image: "/images/ai-agents-hero.png",
  },
  {
    title: "How to Automate Your HR Onboarding with AI",
    date: "July 15, 2025",
    snippet: "A step-by-step guide to building an autonomous HR workflow that delights new hires.",
    image: "/images/hr-automation.png",
  },
  {
    title: "Beyond ChatGPT: Building Robust AI Workflows",
    date: "July 8, 2025",
    snippet: "Learn the difference between single-prompt AI and robust, multi-agent systems for complex tasks.",
    image: "/images/automation-network.png",
  },
]

export function ArticlesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Take a look at our latest articles</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Stay up-to-date with the latest trends and best practices in product analytics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.title} className="overflow-hidden flex flex-col">
              <Link href="#" className="block">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={550}
                  height={310}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <CardHeader>
                <p className="text-sm text-muted-foreground">{article.date}</p>
                <h3 className="text-lg font-semibold">
                  <Link href="#" className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{article.snippet}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
