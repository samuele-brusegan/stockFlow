import { BottomNavigation } from "@/components/bottom-navigation"
import { FeedbackContent } from "@/components/feedback-content"

export default function Feedback() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pb-16">
        <FeedbackContent />
      </div>
      <BottomNavigation />
    </div>
  )
}

