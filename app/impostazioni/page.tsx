import { BottomNavigation } from "@/components/bottom-navigation"
import { SettingsContent } from "@/components/settings-content"

export default function Settings() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pb-16">
        <SettingsContent />
      </div>
      <BottomNavigation />
    </div>
  )
}

