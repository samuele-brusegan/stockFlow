import { BottomNavigation } from "@/components/bottom-navigation"
import { TransactionsContent } from "@/components/transactions-content"

export default function Transactions() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto pb-16">
        <TransactionsContent />
      </div>
      <BottomNavigation />
    </div>
  )
}

