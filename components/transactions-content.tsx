"use client"

import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export function TransactionsContent() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">transazioni</h1>

      <div className="bg-gray-900 p-4 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h2 className="text-sm font-semibold">conto 1</h2>
            <p className="text-xs text-gray-400">risparmio</p>
          </div>
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>

      <div className="space-y-3">
        <Card className="bg-gray-900 p-3 border-l-4 border-red-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium">Spesa</h3>
              <p className="text-xs text-gray-400">Carta</p>
            </div>
            <span className="text-red-500">-€ 24.99</span>
          </div>
        </Card>

        <Card className="bg-gray-900 p-3 border-l-4 border-green-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium">Stipendio</h3>
              <p className="text-xs text-gray-400">Bonifico</p>
            </div>
            <span className="text-green-500">+€ 1,500.00</span>
          </div>
        </Card>

        <Card className="bg-gray-900 p-3 border-l-4 border-red-500">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-sm font-medium">Affitto</h3>
              <p className="text-xs text-gray-400">Bonifico</p>
            </div>
            <span className="text-red-500">-€ 650.00</span>
          </div>
        </Card>
      </div>
    </div>
  )
}

