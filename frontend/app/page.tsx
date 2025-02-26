"use client"

import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import logo from "@/app/assets/logo.png"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50">
      {/* nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
            <div className="p-4 flex items-center space-x-2 justify-center">
              <img src={logo.src} className="h-16 mt-2"/>
            </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-sm font-medium">
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium">
                Use Cases
              </Link>
              <Link href="#" className="text-sm font-medium">
                Product
              </Link>
              <Link href="#" className="text-sm font-medium">
                Resources
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="#" className="hidden md:block text-sm font-medium">
                Dashboard
              </Link>
              <Link href="#" className="hidden md:block text-sm font-medium">
                Editor
              </Link>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* hero */}
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            We enable developers
            <br />
            to create <span className="text-blue-500">stunning presentations</span>
          </h1>

          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
              New! - Experimental Video Export 🎥
            </Badge>
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take your Code Presentations to the next level with snappify&apos;s powerful animation features.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              Get started - It&apos;s free
            </Button>
            <Button size="lg" variant="outline">
              View Templates
            </Button>
          </div>

          {/* community */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {[...Array(9)].map((_, i) => (
              <Avatar key={i} className="border-2 border-white">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-sm text-gray-500">Join a community of 38k+ developers spicing up their content</p>
        </div>

        {/* editor */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="absolute -z-10 w-32 h-32 bg-pink-200 rounded-full -right-8 top-0 blur-2xl opacity-50" />
          <div className="absolute -z-10 w-32 h-32 bg-green-200 rounded-full -left-8 bottom-0 blur-2xl opacity-50" />
          <div className="absolute -z-10 w-32 h-32 bg-yellow-200 rounded-full right-1/4 bottom-1/4 blur-2xl opacity-50" />

          <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-sm">hello-world.js</span>
              </div>
            </div>
            <div className="p-4">
              <pre className="text-sm">
                <code className="text-gray-300">
                  <span className="text-pink-400">function</span> <span className="text-blue-400">helloWorld</span>(){" "}
                  {"{"}
                  <br />
                  {"  "}console.<span className="text-blue-400">log</span>(
                  <span className="text-green-400">&apos;Hello World!&apos;</span>
                  );
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* leaders sec */}
        <div className="mt-24 text-center">
          <h2 className="text-xl text-gray-600 mb-8">Trusted by industry leaders around the globe</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            {["Vendure", "Jina", "Textualize", "Chakra", "Supabase"].map((company) => (
              <div key={company} className="h-8">
                <div className="text-gray-400 font-medium">{company}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
