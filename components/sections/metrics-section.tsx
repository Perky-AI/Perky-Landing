"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function MetricsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 border border-brand-blue/20">
            <CardHeader>
              <CardTitle className="text-4xl font-black text-brand-blue">90%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium flex items-center justify-center gap-2 text-foreground">
                <Zap className="w-5 h-5 text-brand-blue" /> {t('home.metrics.faster.title')}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 border border-brand-purple/20">
            <CardHeader>
              <CardTitle className="text-4xl font-black text-brand-purple">50%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium flex items-center justify-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5 text-brand-purple" /> {t('home.metrics.reduction.title')}
              </p>
            </CardContent>
          </Card>
          <Card className="text-center bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 border border-brand-blue/20">
            <CardHeader>
              <CardTitle className="text-4xl font-black bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">3x</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium flex items-center justify-center gap-2 text-foreground">
                <Users className="w-5 h-5 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent" /> {t('home.metrics.productivity.title')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
