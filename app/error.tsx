'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-md mx-auto text-center">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto bg-destructive/10 p-4 rounded-full w-fit mb-4">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <CardTitle className="text-2xl">Something went wrong!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We apologize for the inconvenience. An unexpected error has occurred.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={reset} className="flex-1">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Try again
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <Link href="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 