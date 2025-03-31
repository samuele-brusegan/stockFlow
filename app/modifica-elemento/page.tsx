import { BottomNavigation } from "@/components/bottom-navigation"
import { ModifyElementContent } from "@/components/modify-element-content"

export default function ModifyElement() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pb-16">
        <ModifyElementContent />
      </div>
      <BottomNavigation />
    </div>
  )
}

