import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const useCases = [
  {
    team: "Engineering",
    description:
      "Automate CI/CD pipelines, bug reporting, and performance monitoring, allowing your developers to focus on building great products.",
    image: "/images/team-engineering.png",
  },
  {
    team: "Marketing",
    description:
      "Streamline lead nurturing, automate social media scheduling, and generate campaign performance reports on the fly.",
    image: "/images/team-marketing.png",
  },
  {
    team: "Operations",
    description:
      "Handle internal support tickets, automate employee onboarding, and manage logistics with intelligent AI workflows.",
    image: "/images/team-operations.png",
  },
]

export function UseCasesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Designed for teams of all sorts and sizes</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Empower every team with the data they need to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <Card key={useCase.team} className="overflow-hidden">
              <Image
                src={useCase.image || "/placeholder.svg"}
                alt={`${useCase.team} team`}
                width={550}
                height={310}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{useCase.team}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
