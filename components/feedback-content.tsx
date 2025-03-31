"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function FeedbackContent() {
  const [feedback, setFeedback] = useState("")

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">feedback</h1>

      <div className="bg-gray-900 p-4 rounded-lg space-y-4">
        <h2 className="text-lg font-semibold">Inviaci un feedback</h2>
        <p className="text-sm text-gray-400">Aiutaci a migliorare la tua esperienza</p>

        <div className="space-y-4">
          <Textarea
            placeholder="Scrivi il tuo feedback qui..."
            className="bg-gray-800 border-gray-700 min-h-[100px]"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <div className="space-y-2">
            <div className="bg-gray-800 p-2 rounded-lg">
              <p className="text-sm">Suggerimento per migliorare l'app</p>
            </div>

            <div className="bg-gray-800 p-2 rounded-lg">
              <p className="text-sm">Segnalazione di un bug</p>
            </div>

            <div className="bg-gray-800 p-2 rounded-lg">
              <p className="text-sm">Richiesta di nuova funzionalità</p>
            </div>
          </div>

          <Button className="w-full">Invia feedback</Button>
        </div>
      </div>
    </div>
  )
}

