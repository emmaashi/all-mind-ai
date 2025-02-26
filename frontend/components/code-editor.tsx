"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CodeEditorProps {
  fileName?: string
  language?: string
  code: string
}

export function CodeEditor({ fileName = "hello-world.js", language = "js", code }: CodeEditorProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position for tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animation for tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]), {
    damping: 30,
    stiffness: 300,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]), {
    damping: 30,
    stiffness: 300,
  })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXFromCenter = event.clientX - rect.left - width / 2
    const mouseYFromCenter = event.clientY - rect.top - height / 2
    mouseX.set(mouseXFromCenter / width)
    mouseY.set(mouseYFromCenter / height)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  async function copyCode() {
    await navigator.clipboard.writeText(code)
  }

  return (
    <div className="relative perspective-1000">
      <div className="absolute -z-10 w-48 h-48 rounded-full bg-pink-300/50 blur-2xl -left-12 top-0" />
      <div className="absolute -z-10 w-48 h-48 bg-green-300/50 blur-2xl -right-12 bottom-0" />
      <div className="absolute -z-10 w-32 h-32 bg-orange-300/50 blur-2xl right-1/4 bottom-1/4 rotate-45" />

      <motion.div
        className="relative bg-gray-900 rounded-xl shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Window Controls */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 rounded-t-xl backdrop-blur-sm">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-gray-800/50">
            <div className="w-4 h-4 bg-yellow-500/20 rounded flex items-center justify-center text-[10px] text-yellow-200 font-mono">
              {language}
            </div>
            <span className="text-sm text-gray-400">{fileName}</span>
          </div>

          {/* copy button */}
          <motion.div
            className="ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-white/10"
              onClick={copyCode}
            >
              <Copy className="w-4 h-4 mr-1" />
              Copy
            </Button>
          </motion.div>
        </div>

        <div className="p-4 overflow-x-auto">
          <pre className="text-sm font-mono">
            <code>
              <span className="text-pink-400">function</span> <span className="text-blue-400">helloWorld</span>() {"{"}
              <br />
              {"  "}console.<span className="text-blue-400">log</span>(
              <span className="text-green-400">&apos;Hello World!&apos;</span>);
              <br />
              {"}"}
            </code>
          </pre>
        </div>
      </motion.div>
    </div>
  )
}

