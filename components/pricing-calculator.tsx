"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Calculator, Users, DollarSign, TrendingDown } from "lucide-react"

const plans = [
  {
    name: "Starter",
    pricePerSeat: 30,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    features: ["Up to 5 AI agents", "1,000 tasks per month", "Email & calendar automation", "Standard support"],
  },
  {
    name: "Professional",
    pricePerSeat: 50,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    popular: true,
    features: ["Up to 20 AI agents", "10,000 tasks per month", "All automation features", "Priority support"],
  },
  {
    name: "Enterprise",
    pricePerSeat: null,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    features: ["Unlimited AI agents", "Unlimited tasks", "Custom integrations", "Dedicated account manager"],
  },
]

const volumeDiscounts = [
  { minSeats: 10, discount: 0.05, label: "5% off" },
  { minSeats: 25, discount: 0.1, label: "10% off" },
  { minSeats: 50, discount: 0.15, label: "15% off" },
  { minSeats: 100, discount: 0.2, label: "20% off" },
]

export function PricingCalculator() {
  const [teamSize, setTeamSize] = useState([5])
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const currentTeamSize = teamSize[0]
  const annualDiscount = billingCycle === "annual" ? 0.15 : 0 // 15% annual discount

  // Calculate volume discount
  const getVolumeDiscount = (seats: number) => {
    const applicableDiscount = volumeDiscounts
      .filter((discount) => seats >= discount.minSeats)
      .sort((a, b) => b.discount - a.discount)[0]
    return applicableDiscount?.discount || 0
  }

  const volumeDiscount = getVolumeDiscount(currentTeamSize)
  const totalDiscount = annualDiscount + volumeDiscount

  const calculatePrice = (pricePerSeat: number) => {
    const basePrice = pricePerSeat * currentTeamSize
    const discountedPrice = basePrice * (1 - totalDiscount)
    return billingCycle === "annual" ? discountedPrice * 12 : discountedPrice
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getSavings = (pricePerSeat: number) => {
    const originalPrice = pricePerSeat * currentTeamSize
    const discountedPrice = originalPrice * (1 - totalDiscount)
    const savings = originalPrice - discountedPrice
    return billingCycle === "annual" ? savings * 12 : savings
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Calculator className="w-6 h-6 text-primary" />
          Pricing Calculator
        </CardTitle>
        <p className="text-muted-foreground">Estimate your costs and see potential savings based on your team size</p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Team Size Slider */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              Team Size
            </label>
            <Badge variant="outline" className="text-lg px-3 py-1">
              {currentTeamSize} {currentTeamSize === 1 ? "seat" : "seats"}
            </Badge>
          </div>
          <Slider value={teamSize} onValueChange={setTeamSize} max={200} min={1} step={1} className="w-full" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 seat</span>
            <span>200+ seats</span>
          </div>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="space-y-4">
          <label className="text-sm font-medium">Billing Cycle</label>
          <div className="flex gap-2">
            <Button
              variant={billingCycle === "monthly" ? "default" : "outline"}
              onClick={() => setBillingCycle("monthly")}
              className="flex-1"
            >
              Monthly
            </Button>
            <Button
              variant={billingCycle === "annual" ? "default" : "outline"}
              onClick={() => setBillingCycle("annual")}
              className="flex-1 relative"
            >
              Annual
              <Badge className="absolute -top-2 -right-2 text-xs">Save 15%</Badge>
            </Button>
          </div>
        </div>

        {/* Discounts Display */}
        {(volumeDiscount > 0 || annualDiscount > 0) && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-green-600" />
              <span className="font-medium text-green-800">Active Discounts</span>
            </div>
            <div className="space-y-1 text-sm text-green-700">
              {annualDiscount > 0 && <div>• Annual billing: 15% off</div>}
              {volumeDiscount > 0 && (
                <div>
                  • Volume discount ({currentTeamSize}+ seats):{" "}
                  {volumeDiscounts.find((d) => d.discount === volumeDiscount)?.label}
                </div>
              )}
              <div className="font-medium pt-1">Total savings: {Math.round(totalDiscount * 100)}% off</div>
            </div>
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : plan.borderColor} ${plan.bgColor}`}
            >
              {plan.popular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>}
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-lg ${plan.color}`}>{plan.name}</CardTitle>
                <div className="space-y-2">
                  {plan.pricePerSeat ? (
                    <>
                      <div className="text-3xl font-bold">{formatPrice(calculatePrice(plan.pricePerSeat))}</div>
                      <div className="text-sm text-muted-foreground">
                        {billingCycle === "annual" ? "per year" : "per month"}
                      </div>
                      {totalDiscount > 0 && (
                        <div className="space-y-1">
                          <div className="text-xs text-muted-foreground line-through">
                            {formatPrice(
                              billingCycle === "annual"
                                ? plan.pricePerSeat * currentTeamSize * 12
                                : plan.pricePerSeat * currentTeamSize,
                            )}
                          </div>
                          <div className="text-xs text-green-600 font-medium flex items-center justify-center gap-1">
                            <DollarSign className="w-3 h-3" />
                            Save {formatPrice(getSavings(plan.pricePerSeat))}{" "}
                            {billingCycle === "annual" ? "per year" : "per month"}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-muted-foreground">Custom Pricing</div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.pricePerSeat ? "Get Started" : "Contact Sales"}
                </Button>
                <div className="space-y-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="text-xs text-muted-foreground">
                      • {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-muted/50 rounded-lg p-6 text-center space-y-4">
          <h3 className="font-semibold text-lg">Cost Summary</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Team Size</div>
              <div className="font-semibold">{currentTeamSize} seats</div>
            </div>
            <div>
              <div className="text-muted-foreground">Billing</div>
              <div className="font-semibold capitalize">{billingCycle}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Total Discount</div>
              <div className="font-semibold text-green-600">{Math.round(totalDiscount * 100)}%</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Prices shown are estimates. Final pricing may vary based on specific requirements and custom features.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
