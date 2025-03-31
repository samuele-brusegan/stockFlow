"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { useState } from "react"

const data = [
    { name: "Conto 1", value: 400, color: "#0088FE" },
    { name: "Conto 2", value: 20, color: "#00C49F" },
    { name: "Altro", value: 300, color: "#FFBB28" },
]

export function HomeContent() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold">home</h1>

            <Card className="bg-gray-900 p-4">
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <h2 className="text-sm font-semibold">conto 1</h2>
                        <p className="text-xs text-gray-400">risparmio</p>
                    </div>
                    <div className="flex space-x-2">
                        <button className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                            <span className="text-xs">+</span>
                        </button>
                        <button className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                            <span className="text-xs">-</span>
                        </button>
                    </div>
                </div>

                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                                activeIndex={activeIndex}
                                onMouseEnter={(_, index) => setActiveIndex(index)}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-4">
                    <div className="w-full bg-red-500 h-2 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: "15%" }}></div>
                        {/*<div className="bg-yellow-500 h-full" style={{ width: "35%" }}></div>*/}
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                        <span>0%</span>
                        <span>65%</span>
                        <span>100%</span>
                    </div>
                </div>
            </Card>
        </div>
    )
}

