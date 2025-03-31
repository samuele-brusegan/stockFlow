import { BottomNavigation } from "@/components/bottom-navigation"
import { HomeContent } from "@/components/home-content"

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pb-16">
        <HomeContent />
      </div>
      <BottomNavigation />
    </div>
  )
}

