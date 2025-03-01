"use client"

import { useRef } from "react"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CodeEditor } from "@/components/code-editor"
import { Camera, Sparkles } from "lucide-react"
import { NavDropdown, resourcesItems, productItems, useCasesItems } from "@/components/nav-dropdown"
import { motion, useScroll, useTransform } from "framer-motion"
import { PricingSection } from "@/components/pricing-section"
import { CodeCarousel } from "@/components/code-carousel"
import { ConnectedSections } from "@/components/connected-section"
import { UserStories } from "@/components/user-stories"
import TextScramble from "@skits/react-text-scramble"
import { ModernFooter } from "@/components/footer"

import logo from "@/app/assets/logo.png"
import vendure from "@/app/assets/vendure.png"
import jina from "@/app/assets/jina.png"
import textualize from "@/app/assets/textualize.png"
import chakra from "@/app/assets/chakra.png"
import supabase from "@/app/assets/supabase.png"

const companyLogos = [
  { name: "Vendure", src: vendure.src },
  { name: "Jina", src: jina.src },
  { name: "Textualize", src: textualize.src },
  { name: "Chakra", src: chakra.src },
  { name: "Supabase", src: supabase.src },
]

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 100])

  return (
    <div ref={containerRef} className="relative min-h-screen watercolor-bg">
      <div className="relative">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="flex items-center gap-2"
              >
                <div className="p-4 flex items-center space-x-2 justify-center">
                  <img src={logo.src || "/placeholder.svg"} className="h-16 mt-2" alt="Snappify Logo" />
                </div>
              </motion.div>

              <div className="hidden md:flex items-center divide-x">
                <button
                  onClick={scrollToPricing}
                  className="text-sm font-bold px-4 hover:text-blue-500 transition-colors"
                >
                  Pricing
                </button>
                <div className="px-4">
                  <NavDropdown title="Use Cases" items={useCasesItems} />
                </div>
                <div className="px-4">
                  <NavDropdown title="Product" items={productItems} />
                </div>
                <div className="px-4">
                  <NavDropdown title="Resources" items={resourcesItems} />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href="#" className="hidden md:block text-sm font-bold hover:text-blue-500 transition-colors">
                  Dashboard
                </Link>
                <Link href="#" className="hidden md:block text-sm font-bold hover:text-blue-500 transition-colors">
                  Editor
                </Link>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.nav>

        <div className="container mx-auto px-4">
          <motion.section style={{ y: textY }} className="py-24 text-center mt-6 relative">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-1/4 w-12 h-12 text-blue-500"
            >
              <Sparkles className="w-full h-full" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-40 right-1/4 w-16 h-16 text-purple-500 opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L15.708 8.292L24 12L15.708 15.708L12 24L8.292 15.708L0 12L8.292 8.292L12 0Z" />
              </svg>
            </motion.div>

            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              We enable developers
              <br />
              to create{" "}
              <span className="font-bold">
                <span className="inline-block text-blue-500">
                  <TextScramble text="stunning" autostart revealText revealSpeed={100} revealMode="typewriter" />
                </span>
              </span>{" "}
              <span className="font-bold">
                <span className="inline-block text-blue-500">
                  <TextScramble
                    text="presentations.™"
                    autostart
                    wrappingElement="span"
                    revealText
                    revealSpeed={100}
                    revealMode="typewriter"
                  />
                </span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center mb-6"
            >
              <Badge
                variant="secondary"
                className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
              >
                New! - Experimental Video Export <Camera className="h-4 w-4" />
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Take your Code Presentations to the next level with snappify&apos;s powerful animation features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 transform transition-all hover:scale-105">
                Get started - It&apos;s free
              </Button>
              <Button size="lg" variant="outline" className="transform transition-all hover:scale-105">
                View Templates
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="relative"
            >
              <p className="text-sm text-gray-500 mb-16">
                Join a community of 38k+ developers spicing up their content
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex max-w-2xl mx-auto justify-center items-center"
            >
              <CodeEditor code={`function helloWorld() {\n  console.log('Hello World!');\n}`} />
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="py-24 text-center"
          >
            <h2 className="text-2xl text-gray-600 mb-12">Trusted by industry leaders around the globe</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {companyLogos.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.75, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  className="h-16"
                >
                  <img src={company.src || "/placeholder.svg"} className="h-16 mt-2" alt={company.name} />
                </motion.div>
              ))}
            </div>
          </motion.section>

          <ConnectedSections />
          <UserStories />
          <CodeCarousel />
          <div ref={pricingRef}>
            <PricingSection />
          </div>
          <ModernFooter />
        </div>
      </div>
    </div>
  )
}
