"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Calculator, Clock, DollarSign, TrendingUp, Users, Zap } from "lucide-react"

const taskTypes = [
  {
    id: "email",
    name: "Email Processing",
    icon: "📧",
    manualTimePerTask: 3, // minutes
    aiTimePerTask: 0.2, // minutes
    defaultTasksPerWeek: 100,
  },
  {
    id: "scheduling",
    name: "Meeting Scheduling",
    icon: "📅",
    manualTimePerTask: 15, // minutes
    aiTimePerTask: 1, // minutes
    defaultTasksPerWeek: 20,
  },
  {
    id: "reporting",
    name: "Report Generation",
    icon: "📊",
    manualTimePerTask: 120, // minutes
    aiTimePerTask: 5, // minutes
    defaultTasksPerWeek: 5,
  },
  {
    id: "support",
    name: "Customer Support",
    icon: "💬",
    manualTimePerTask: 8, // minutes
    aiTimePerTask: 1, // minutes
    defaultTasksPerWeek: 50,
  },
  {
    id: "documents",
    name: "Document Processing",
    icon: "📄",
    manualTimePerTask: 20, // minutes
    aiTimePerTask: 2, // minutes
    defaultTasksPerWeek: 30,
  },
]

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState([10])
  const [hourlyRate, setHourlyRate] = useState([50])
  const [taskVolumes, setTaskVolumes] = useState(
    taskTypes.reduce(
      (acc, task) => {
        acc[task.id] = [task.defaultTasksPerWeek]
        return acc
      },
      {} as Record<string, number[]>,
    ),
  )

  const currentTeamSize = teamSize[0]
  const currentHourlyRate = hourlyRate[0]

  const calculateROI = () => {
    let totalWeeklyTimeSaved = 0
    let totalWeeklyCost = 0

    taskTypes.forEach((task) => {
      const tasksPerWeek = taskVolumes[task.id]?.[0] || 0
      const timeSavedPerTask = task.manualTimePerTask - task.aiTimePerTask
      const weeklyTimeSaved = (tasksPerWeek * timeSavedPerTask) / 60 // convert to hours
      totalWeeklyTimeSaved += weeklyTimeSaved
    })

    // Calculate costs
    const monthlySubscriptionCost = currentTeamSize * 50 * 4.33 // Professional plan, weekly to monthly
    const weeklySavings = totalWeeklyTimeSaved * currentHourlyRate
    const monthlySavings = weeklySavings * 4.33

    totalWeeklyCost = monthlySubscriptionCost / 4.33

    return {
      weeklyTimeSaved: totalWeeklyTimeSaved,
      monthlyTimeSaved: totalWeeklyTimeSaved * 4.33,
      weeklySavings,
      monthlySavings,
      weeklySubscriptionCost: totalWeeklyCost,
      monthlySubscriptionCost,
      weeklyROI: weeklySavings - totalWeeklyCost,
      monthlyROI: monthlySavings - monthlySubscriptionCost,
      paybackWeeks: totalWeeklyCost / weeklySavings,
    }
  }

  const roi = calculateROI()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatTime = (hours: number) => {
    if (hours < 1) {
      return `${Math.round(hours * 60)} minutes`
    }
    return `${Math.round(hours * 10) / 10} hours`
  }

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Calculator className="w-6 h-6 text-primary" />
          ROI Calculator
        </CardTitle>
        <p className="text-muted-foreground">
          Calculate your return on investment and see how much time and money you can save with AI automation
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Team Configuration */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <Users className="w-4 h-4" />
                Team Size
              </label>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {currentTeamSize} people
              </Badge>
            </div>
            <Slider value={teamSize} onValueChange={setTeamSize} max={100} min={1} step={1} className="w-full" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Average Hourly Rate
              </label>
              <Badge variant="outline" className="text-lg px-3 py-1">
                {formatCurrency(currentHourlyRate)}/hour
              </Badge>
            </div>
            <Slider value={hourlyRate} onValueChange={setHourlyRate} max={200} min={20} step={5} className="w-full" />
          </div>
        </div>

        {/* Task Volume Configuration */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Weekly Task Volumes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskTypes.map((task) => (
              <Card key={task.id} className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{task.icon}</span>
                    <div>
                      <h4 className="font-medium text-sm">{task.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        Saves {task.manualTimePerTask - task.aiTimePerTask} min/task
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Tasks per week</span>
                      <Badge variant="outline" className="text-xs">
                        {taskVolumes[task.id]?.[0] || 0}
                      </Badge>
                    </div>
                    <Slider
                      value={taskVolumes[task.id] || [0]}
                      onValueChange={(value) =>
                        setTaskVolumes((prev) => ({
                          ...prev,
                          [task.id]: value,
                        }))
                      }
                      max={200}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ROI Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{formatTime(roi.weeklyTimeSaved)}</div>
              <p className="text-sm text-blue-700">Time Saved Per Week</p>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">{formatCurrency(roi.weeklySavings)}</div>
              <p className="text-sm text-green-700">Cost Savings Per Week</p>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">{formatCurrency(roi.weeklyROI)}</div>
              <p className="text-sm text-purple-700">Net ROI Per Week</p>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">
                {roi.paybackWeeks > 0 ? `${Math.ceil(roi.paybackWeeks)}` : "0"} weeks
              </div>
              <p className="text-sm text-orange-700">Payback Period</p>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Summary */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Monthly Summary</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">{formatTime(roi.monthlyTimeSaved)}</div>
                <p className="text-sm text-muted-foreground">Total Time Saved</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{formatCurrency(roi.monthlySavings)}</div>
                <p className="text-sm text-muted-foreground">Total Cost Savings</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">{formatCurrency(roi.monthlyROI)}</div>
                <p className="text-sm text-muted-foreground">Net Monthly ROI</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Subscription cost: {formatCurrency(roi.monthlySubscriptionCost)}/month for {currentTeamSize} seats
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                Start Saving Today
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="text-center text-xs text-muted-foreground">
          <p>
            * ROI calculations are estimates based on typical time savings. Actual results may vary depending on your
            specific use case and implementation.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
