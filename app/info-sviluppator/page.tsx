import { BottomNavigation } from "@/components/bottom-navigation"
import { DeveloperInfoContent } from "@/components/developer-info-content"

export default function DeveloperInfo() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pb-16">
        <DeveloperInfoContent />
      </div>
      <BottomNavigation />
    </div>
  )
}

