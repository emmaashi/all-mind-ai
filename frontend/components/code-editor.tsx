"use client";

import type React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CodeEditorProps {
  fileName?: string;
  language?: string;
  code: string;
}

export function CodeEditor({
  fileName = "hello-world.js",
  language = "js",
  code,
}: CodeEditorProps) {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.1, 0.1], ["20deg", "-20deg"]),
    {
      damping: 25,
      stiffness: 250,
    },
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.1, 0.1], ["-20deg", "20deg"]),
    {
      damping: 25,
      stiffness: 250,
    },
  );

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXFromCenter = event.clientX - rect.left - width / 2;
    const mouseYFromCenter = event.clientY - rect.top - height / 2;
    mouseX.set(mouseXFromCenter / width);
    mouseY.set(mouseYFromCenter / height);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  async function copyCode() {
    await navigator.clipboard.writeText(code);
  }

  return (
    <div className="relative perspective-1000">
      <div className="absolute -z-10 top-0 left-0 w-40 h-40 rounded-full bg-pink-400 -translate-x-1/4 -translate-y-1/4" />
      <div className="absolute -z-10 bottom-0 right-0 w-24 h-24 bg-green-500 rotate-45 translate-x-1/4 translate-y-1/4" />
      <div
        className="absolute -z-10 bottom-0 left-1/2 w-20 h-20 bg-orange-300 transform-gpu"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          transform: "translateX(-50%) translateY(25%)",
        }}
      />

      <motion.div
        className="relative bg-gray-900 rounded-xl shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          scale: isHovered ? 1.02 : 1,
          transition: "scale 0.2s ease",
        }}
      >
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
              <span className="text-pink-400">function</span>{" "}
              <span className="text-blue-400">helloWorld</span>() {"{"}
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
  );
}
