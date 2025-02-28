"use client"

import { useRef } from "react"
import { motion, useAnimationFrame, useMotionValue, useSpring } from "framer-motion"
import { CodeWindow } from "./code-window"

const backgrounds = [
  "bg-gradient-to-br from-orange-200 to-pink-300",
  "bg-gradient-to-br from-green-300 to-teal-500",
  "bg-gradient-to-br from-pink-400 to-red-400",
  "bg-gradient-to-br from-orange-200 to-purple-300",
  "bg-gradient-to-br from-yellow-100 to-purple-200",
  "bg-gradient-to-br from-blue-400 to-purple-400",
]

const code = `function hello(name: string) {
  console.log('Hi ' + name);
}`

export function CodeCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const springX = useSpring(x, {
    damping: 50,
    stiffness: 400,
  })

  useAnimationFrame((time) => {
    const xPos = (time * 0.05) % (ref.current?.scrollWidth || 0)
    x.set(-xPos)
  })

  return (
    <div className="w-full overflow-hidden py-20">
      <motion.div ref={ref} style={{ x: springX }} className="flex gap-8 w-max">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`relative w-[600px] h-[300px] rounded-3xl ${backgrounds[i]} p-12 flex items-center justify-center`}
          >
            <CodeWindow code={code} showCopy={i === 1} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

