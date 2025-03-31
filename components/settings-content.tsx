"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { ChevronRight } from "lucide-react"

export function SettingsContent() {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">impostazioni</h1>

      <div className="space-y-4">
        <Card className="bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <span>Tema scuro</span>
            <Switch defaultChecked />
          </div>
        </Card>

        <Card className="bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <span>Notifiche</span>
            <Switch defaultChecked />
          </div>
        </Card>

        <Card className="bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <span>Sincronizza con il cloud</span>
            <ChevronRight className="h-5 w-5" />
          </div>
        </Card>

        <Card className="bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <span>Esporta dati</span>
            <ChevronRight className="h-5 w-5" />
          </div>
        </Card>

        <Card className="bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <span>Importa dati</span>
            <ChevronRight className="h-5 w-5" />
          </div>
        </Card>

        <Card className="bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <span>Cancella tutti i dati</span>
            <ChevronRight className="h-5 w-5" />
          </div>
        </Card>

        <Button variant="outline" className="w-full">
          Ripristina
        </Button>
      </div>
    </div>
  )
}

