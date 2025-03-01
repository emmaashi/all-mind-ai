"use client"

import { CodeWindow } from "./code-window"
import { LinkedinIcon, InstagramIcon, XIcon } from "lucide-react";
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const educationCode = `function testFunc() {
  console.log('Monocraft!');
}`

const socialCode = `const MyButton = () => (
  <button className="my-button">
    It's mine!
  </button>
);`

const presentationCode = `>>> 1 + 2 + 7
10
>>> 1 * 2 * 4
24
>>> True & True & False & True
False`

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

export function ConnectedSections() {
  return (
    <div className="relative">
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full" style={{ zIndex: -1 }}>
        <path
          d="M 200,100 C 400,100 400,300 200,300 C 0,300 0,500 200,500 C 400,500 400,700 200,700"
          stroke="rgb(200, 200, 255)"
          strokeWidth="4"
          strokeDasharray="8,8"
          fill="none"
        />
      </svg>

    <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-12">
                <div className="relative">
                  <CodeWindow code={presentationCode} filename="smoosh.py" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-14 border-l-gray-800 ml-2"></div>
                    </div>
                  </div>
                </div>
                <div className="text-white text-center mt-4">feel free to copy some code 😄</div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Create next-level presentations</h2>
              <p className="text-xl mb-4">Say goodbye to boring presentations created with PowerPoint or Keynote. 👋</p>
              <p className="text-xl mb-6">
                snappify enables you to create stunning presentations, with first-class support for code snippets.
              </p>
              <Link href="#" className="text-lg font-medium inline-flex items-center hover:underline mb-8">
                Learn more →
              </Link>
              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💡</span>
                  <p className="text-lg">
                    <span className="font-bold">Share interactive slides </span>
                    so your viewers can easily copy code snippets and interact with links.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="relative w-full md:w-1/2">
              <div className="absolute -right-4 -top-4">
                <LinkedinIcon className="w-12 h-12 text-blue-600" />
              </div>
              <div className="absolute -right-8 bottom-4">
                <InstagramIcon className="w-16 h-16 text-pink-600" />
              </div>
              <div className="absolute right-1/2 -top-8">
                <XIcon className="w-8 h-8" />
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl p-12">
                <CodeWindow code={socialCode} filename="button.tsx" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">Elevate your Technical Content</h2>
              <p className="text-xl mb-4">
                You're a developer, looking to create <span className="font-semibold">visually engaging</span>{" "}
                infographics for social media?
              </p>
              <p className="text-xl mb-6">
                Use snappify to create stunning visuals of your technical concepts, that will{" "}
                <span className="font-semibold">engage your followers</span> and take your social media presence to the
                next level.
              </p>
              <Link href="#" className="text-lg font-medium inline-flex items-center hover:underline">
                View Templates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-full md:w-1/2">
              <div className="absolute -left-8 -top-8">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path d="M0 20 L20 0 L40 20" stroke="black" strokeWidth="4" fill="none" />
                </svg>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl p-12">
                <CodeWindow
                  code={educationCode}
                  filename="monocraft.js"
                  annotations={[
                    {
                      text: "Console.log is a built-in function that prints a given string or variable to the console.",
                      position: "bottom",
                    },
                  ]}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-4xl font-bold mb-6">Simplify your Education</h2>
              <p className="text-xl mb-4">
                Are you a teacher or course creator looking to help your students better understand{" "}
                <span className="font-semibold">technical concepts</span>?
              </p>
              <p className="text-xl mb-6">
                snappify makes it easy to create educational content that lets your students retain information and
                grasp complex ideas.
              </p>
              <Link
                href="#"
                className="group inline-flex items-center text-lg font-medium text-purple-600 hover:text-purple-700"
              >
                Learn more
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

