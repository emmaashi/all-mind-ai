"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import michael from "@/app/assets/michael.png"
import rodrigo from "@/app/assets/rodrigo.png"

const stories = [
  {
    name: "Rodrigo",
    role: "Python educator",
    emoji: "🎯",
    image: rodrigo,
    quote:
      "I've been presenting my talks with snappify for a while now. And each day it looks less and less likely that I'll go back to PowerPoint.",
  },
  {
    name: "Michael Bromley",
    role: "Co-founder & CTO",
    image: michael,
    quote:
      "As a developer running a large open source community, without the time and skills for complex design software, snappify lets me get better results in a fraction of the time.",
  },
]

export function UserStories() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-purple-50 opacity-80" />

      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-purple-200 opacity-20 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            User Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600"
          >
            Get to know our users and learn how they leverage snappify!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-2xl p-8 shadow-lg relative z-10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {story.name} {story.emoji}
                    </h3>
                    <p className="text-gray-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-4">{story.quote}</p>
                <Link href="#" className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <div className="absolute top-4 right-4 text-6xl text-blue-500 opacity-50 z-20">"</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

