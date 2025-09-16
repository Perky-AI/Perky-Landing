"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-md mx-auto text-center">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-muted p-4 rounded-full w-fit mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Page Not Found</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="flex-1">
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go home
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => window.history.back()} className="flex-1">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go back
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 