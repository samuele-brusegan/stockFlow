"use client"

import { Home, BarChart3, Settings, Info } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center w-full h-full ${pathname === "/" ? "text-primary" : "text-gray-400"}`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">home</span>
        </Link>

        <Link
          href="/transazioni"
          className={`flex flex-col items-center justify-center w-full h-full ${pathname === "/transazioni" ? "text-primary" : "text-gray-400"}`}
        >
          <BarChart3 size={24} />
          <span className="text-xs mt-1">transazioni</span>
        </Link>

        <Link
          href="/modifica-elemento"
          className={`flex flex-col items-center justify-center w-full h-full ${pathname === "/modifica-elemento" ? "text-primary" : "text-gray-400"}`}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold">+</span>
          </div>
        </Link>

        <Link
          href="/impostazioni"
          className={`flex flex-col items-center justify-center w-full h-full ${pathname === "/impostazioni" ? "text-primary" : "text-gray-400"}`}
        >
          <Settings size={24} />
          <span className="text-xs mt-1">impostazioni</span>
        </Link>

        <Link
          href="/info-sviluppator"
          className={`flex flex-col items-center justify-center w-full h-full ${pathname === "/info-sviluppator" ? "text-primary" : "text-gray-400"}`}
        >
          <Info size={24} />
          <span className="text-xs mt-1">info</span>
        </Link>
      </div>
    </div>
  )
}

