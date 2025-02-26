"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  FileText,
  Book,
  GraduationCap,
  Users,
  History,
  MessageCircle,
  Grid,
  Home,
  Monitor,
  Code,
  Puzzle,
  Terminal,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DropdownItem {
  title: string
  description: string
  icon: React.ElementType
  iconColor?: string
  bgColor?: string
  isNew?: boolean
}

interface NavDropdownProps {
  title: string
  items: DropdownItem[]
}



export const useCasesItems: DropdownItem[] = [
    {
      title: "Presentations",
      description: "Create stunning slides with smooth animations",
      icon: Monitor,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      title: "Technical Content",
      description: "Take your social media presence to the next level",
      icon: FileText,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      title: "Education",
      description: "Help your students grasp complex concepts easily",
      icon: GraduationCap,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500",
    },
    {
      title: "Embedding",
      description: "Interactive infographics on your website / blog",
      icon: Code,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-500",
    },
  ]
  
  export const resourcesItems: DropdownItem[] = [
    {
      title: "Blog",
      description: "We share insights about several technical topics",
      icon: FileText,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Documentation",
      description: "Learn how to leverage all our powerful features",
      icon: Book,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides how to leverage snappify",
      icon: GraduationCap,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "User Stories",
      description: "Learn how other people use snappify",
      icon: Users,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Changelog",
      description: "Get an overview about our latest changes",
      icon: History,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Discord Community",
      description: "Join our Discord and get in touch with other users",
      icon: MessageCircle,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
  ]
  
  export const productItems: DropdownItem[] = [
    {
      title: "Features",
      description: "Check out what is possible with snappify",
      icon: Grid,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Templates",
      description: "Quickly get started with a variety of templates",
      icon: Home,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Desktop App",
      description: "Create and present using the desktop app",
      icon: Monitor,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
      isNew: true,
    },
    {
      title: "API",
      description: "Automate the creation of your code screenshots",
      icon: Terminal,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Embedding",
      description: "Accessible code-snippets on website / blog",
      icon: Code,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
    {
      title: "Extensions",
      description: "Boost your workflow, create snaps from your IDE",
      icon: Puzzle,
      bgColor: "bg-gray-100",
      iconColor: "text-gray-600",
    },
  ]
  
export function NavDropdown({ title, items }: NavDropdownProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button className="text-sm font-bold py-2 relative">
        {title}
        <div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transition-transform duration-200 origin-left"
          style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
        />
      </button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-white rounded-xl shadow-lg border p-4 grid grid-cols-2 gap-4 z-50"
          >
            {items.map((item) => (
              <div key={item.title} className="p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${item.bgColor || "bg-gray-100"}`}>
                    <item.icon className={`w-5 h-5 ${item.iconColor || "text-gray-600"}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.isNew && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                          NEW
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )}
