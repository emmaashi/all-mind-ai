"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

interface NavItemProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavItem({ href, children, className = "" }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className={`text-sm font-bold relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transition-transform duration-200 origin-left"
        style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
      />
    </Link>
  )
}

