"use client"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CodeEditor } from "@/components/code-editor"
import { Camera } from "lucide-react"
import logo from "@/app/assets/logo.png"
import { NavDropdown, resourcesItems, productItems, useCasesItems } from "@/components/nav-dropdown"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50">
      {/* nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="p-4 flex items-center space-x-2 justify-center">
                <img src={logo.src || "/placeholder.svg"} className="h-16 mt-2" alt="Snappify Logo" />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#" className="text-sm font-bold">
                Pricing
              </Link>
              <NavDropdown title="Use Cases" items={useCasesItems} />
              <NavDropdown title="Product" items={productItems} />
              <NavDropdown title="Resources" items={resourcesItems} />
            </div>

            <div className="flex items-center gap-4">
              <Link href="#" className="hidden md:block text-sm font-bold">
                Dashboard
              </Link>
              <Link href="#" className="hidden md:block text-sm font-bold">
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
      <div className="container mx-auto px-4">
        <section className="py-24 text-center mt-6">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            We enable developers
            <br />
            to create <span className="text-blue-500">stunning presentations</span>
          </h1>

          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
              New! - Experimental Video Export <Camera className="h-4 w-4" />
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
                <AvatarFallback></AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-sm text-gray-500 mb-16">Join a community of 38k+ developers spicing up their content</p>

          {/* code editor */}
          <div className="max-w-2xl mx-auto">
            <CodeEditor code={`function helloWorld() {\n  console.log('Hello World!');\n}`} />
          </div>
        </section>

        {/* trusted by */}
        <section className="py-24 text-center">
          <h2 className="text-2xl text-gray-600 mb-12">Trusted by industry leaders around the globe</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-75">
            {["Vendure", "Jina", "Textualize", "Chakra", "Supabase"].map((company) => (
              <div key={company} className="h-8">
                <div className="text-gray-400 font-medium">{company}</div>
              </div>
            ))}
          </div>
        </section>

        {/* features */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              <div className="bg-green-100/50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-4">Create next-level presentations</h3>
                <p className="text-gray-600 mb-4">
                  Say goodbye to boring presentations created with PowerPoint or Keynote. 👋
                </p>
                <p className="text-gray-600 mb-4">
                  snappify enables you to create stunning presentations, with first-class support for code snippets.
                </p>
                <Link href="#" className="text-blue-500 hover:underline inline-flex items-center">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
