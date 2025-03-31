"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function ModifyElementContent() {
  const [category, setCategory] = useState("")

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center mb-4">
        <Link href="/" className="mr-2">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-semibold">modifica elemento</h1>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-900 p-4 rounded-lg">
          <h2 className="text-sm font-semibold mb-2">modifica categoria</h2>
          <Input
            placeholder="Scrivi il nome..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-gray-800 border-gray-700"
          />
        </div>

        <div className="bg-gray-900 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold">modifica elemento</h2>
            <span className="text-xl font-bold">17</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">valore</span>
              <Input type="number" className="w-24 bg-gray-800 border-gray-700" placeholder="0.00" />
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700">
                bonifico
              </Button>
              <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700">
                carta
              </Button>
              <Button variant="outline" size="sm" className="bg-gray-800 border-gray-700">
                contanti
              </Button>
            </div>

            <Button className="w-full bg-white text-black hover:bg-gray-200">fatto</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

