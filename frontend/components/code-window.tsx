"use client"

import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CodeWindowProps {
  code: string
  showCopy?: boolean
}

export function CodeWindow({ code, showCopy = false }: CodeWindowProps) {
  return (
    <div className="w-full max-w-lg bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
      <div className="px-4 py-3 flex items-center justify-between bg-gray-800/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 px-2 py-0.5 rounded text-sm text-gray-400">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzNlN2JmYSI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0yMCAzaC0xNmMtLjU1IDAtMSAuNDUtMSAxdjE2YzAgLjU1LjQ1IDEgMSAxaDE2Yy41NSAwIDEtLjQ1IDEtMXYtMTZjMC0uNTUtLjQ1LTEtMS0xem0tMS41IDEzLjI3Yy0uMjIuMTUtLjQ3LjI3LS43My4zNS0uMjYuMDgtLjU0LjEyLS44My4xMi0uMzIgMC0uNjMtLjA1LS45My0uMTQtLjMtLjEtLjU3LS4yNC0uOC0uNDItLjIzLS4xOC0uNDItLjQtLjU1LS42Ni0uMTMtLjI2LS4yLS41NS0uMi0uODggMC0uMzMuMDctLjYyLjItLjg4LjEzLS4yNi4zMi0uNDguNTUtLS42Ni4yMy0uMTguNS0uMzIuOC0uNDIuMy0uMS42MS0uMTQuOTMtLjE0LjI5IDAgLjU3LjA0LjgzLjEyLjI2LjA4LjUxLjIuNzMuMzVsLS4zNS40MmMtLjE4LS4xNC0uMzgtLjI1LS42LS4zMy0uMjItLjA4LS40NS0uMTItLjctLjEyLS4yNCAwLS40Ny4wNC0uNjkuMTEtLjIyLjA3LS40MS4xOC0uNTcuMzItLjE2LjE0LS4yOS4zMS0uMzguNTEtLjA5LjItLjE0LjQzLS4xNC42OCAwIC4yNS4wNS40OC4xNC42OC4wOS4yLjIyLjM3LjM4LjUxLjE2LjE0LjM1LjI1LjU3LjMyLjIyLjA3LjQ1LjExLjY5LjExLjI1IDAgLjQ4LS4wNC43LS4xMi4yMi0uMDguNDItLjE5LjYtLjMzbC4zNS40MnoiLz48L3N2Zz4="
              alt="TypeScript"
              className="w-4 h-4"
            />
            hello.ts
          </div>
        </div>
        {showCopy && (
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white hover:bg-white/10"
            onClick={() => navigator.clipboard.writeText(code)}
          >
            <Copy className="w-4 h-4 mr-1" />
            Copy
          </Button>
        )}
      </div>
      <div className="p-4">
        <pre className="text-sm font-mono">
          <code>
            <span className="text-pink-400">function</span> <span className="text-blue-400">hello</span>
            <span className="text-white">(</span>
            <span className="text-orange-300">name</span>
            <span className="text-white">:</span> <span className="text-blue-300">string</span>
            <span className="text-white">) {`{`}</span>
            <br />
            {"  "}
            <span className="text-gray-400">console</span>
            <span className="text-white">.</span>
            <span className="text-blue-400">log</span>
            <span className="text-white">(</span>
            <span className="text-green-300">&apos;Hi &apos;</span> <span className="text-white">+</span>{" "}
            <span className="text-orange-300">name</span>
            <span className="text-white">);</span>
            <br />
            <span className="text-white">{`}`}</span>
          </code>
        </pre>
      </div>
    </div>
  )
}
