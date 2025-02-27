"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CodeEditor } from "@/components/code-editor";
import { Camera } from "lucide-react";
import {
  NavDropdown,
  resourcesItems,
  productItems,
  useCasesItems,
} from "@/components/nav-dropdown";
import logo from "@/app/assets/logo.png";
import vendure from "@/app/assets/vendure.png";
import jina from "@/app/assets/jina.png";
import textualize from "@/app/assets/textualize.png";
import chakra from "@/app/assets/chakra.png";
import supabase from "@/app/assets/supabase.png";

const companyLogos = [
  { name: "Vendure", src: vendure.src },
  { name: "Jina", src: jina.src },
  { name: "Textualize", src: textualize.src },
  { name: "Chakra", src: chakra.src },
  { name: "Supabase", src: supabase.src },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/50">
      {/* nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="p-4 flex items-center space-x-2 justify-center">
                <img
                  src={logo.src || "/placeholder.svg"}
                  className="h-16 mt-2"
                  alt="Snappify Logo"
                />
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
            to create{" "}
            <span className="text-blue-500">stunning presentations</span>
          </h1>

          <div className="flex justify-center mb-6">
            <Badge
              variant="secondary"
              className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
            >
              New! - Experimental Video Export <Camera className="h-4 w-4" />
            </Badge>
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take your Code Presentations to the next level with snappify&apos;s
            powerful animation features.
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
          <p className="text-sm text-gray-500 mb-16">
            Join a community of 38k+ developers spicing up their content
          </p>

          {/* code editor */}
          <div className="flex max-w-2xl mx-auto justify-center items-center">
            <CodeEditor
              code={`function helloWorld() {\n  console.log('Hello World!');\n}`}
            />
          </div>
        </section>

        {/* trusted by */}
        <section className="py-24 text-center">
          <h2 className="text-2xl text-gray-600 mb-12">
            Trusted by industry leaders around the globe
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-75">
            {companyLogos.map((company) => (
              <div key={company.name} className="h-16">
                <img
                  src={company.src}
                  className="h-16 mt-2"
                  alt={`${company.name}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* features */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3">
                <div className="bg-gradient-to-b from-green-200 to-green-100/80 p-8 rounded-3xl relative">
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-800">
                      feel free to copy some code 😄
                    </h3>
                  </div>

                  {/* code editor */}
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-gray-400 text-sm ml-2 flex items-center">
                        <span className="mr-1">🐍</span> smoosh.py
                      </span>
                    </div>

                    <div className="bg-gray-900 p-6 relative">
                      <div className="text-gray-300 font-mono text-sm">
                        <div>
                          <span className="text-purple-400">&gt;&gt;&gt;</span>{" "}
                          <span className="text-amber-400">1</span> +{" "}
                          <span className="text-amber-400">2</span> +{" "}
                          <span className="text-amber-400">7</span>
                        </div>
                        <div>
                          <span className="text-amber-400">10</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-purple-400">&gt;&gt;&gt;</span>{" "}
                          <span className="text-amber-400">1</span> *{" "}
                          <span className="text-amber-400">2</span> *{" "}
                          <span className="text-amber-400">4</span>{" "}
                        </div>
                        <div>
                          <span className="text-amber-400">24</span>
                        </div>
                        <div className="mt-1">
                          <span className="text-purple-400">&gt;&gt;&gt;</span>{" "}
                          <span className="text-blue-400">True</span> &{" "}
                          <span className="text-blue-400">True</span> &{" "}
                          <span className="text-blue-400">False</span> &{" "}
                          <span className="text-blue-400">True</span>
                        </div>
                        <div>
                          <span className="text-blue-400">False</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Create next-level presentations
                </h2>

                <p className="text-xl text-gray-600 mb-4">
                  Say goodbye to boring presentations created with PowerPoint or
                  Keynote. 👋
                </p>

                <p className="text-xl text-gray-600 mb-8">
                  snappify enables you to create stunning presentations, with
                  first-class support for code snippets.
                </p>

                <a
                  href="#"
                  className="text-lg text-blue-500 font-medium inline-flex items-center hover:underline border-b border-blue-500 pb-1"
                >
                  Learn more <span className="ml-1">→</span>
                </a>

                <div className="mt-10 p-6 bg-purple-50 rounded-2xl border border-purple-100">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">💡</span>
                    <div>
                      <h4 className="font-bold text-xl text-gray-800 mb-2">
                        Share interactive slides
                      </h4>
                      <p className="text-lg text-gray-700">
                        so your viewers can easily copy code snippets and
                        interact with links.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
