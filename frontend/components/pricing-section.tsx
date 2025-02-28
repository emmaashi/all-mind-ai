"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Building2, Medal, Trophy, Users, Check } from "lucide-react"

interface Feature {
  name: string
  values: {
    free: string | boolean
    starter: string | boolean
    professional: string | boolean
    team: string | boolean
  }
}

interface Category {
  name: string
  features: Feature[]
}

const categories: Category[] = [
  {
    name: "Dashboard",
    features: [
      {
        name: "Image upload limit",
        values: {
          free: "-",
          starter: "100 MB",
          professional: "1 GB",
          team: "5 GB",
        },
      },
      {
        name: "Snap Storage limit",
        values: {
          free: "3",
          starter: "500",
          professional: "Unlimited",
          team: "Unlimited",
        },
      },
      {
        name: "Folder Storage limit",
        values: {
          free: "0",
          starter: "0",
          professional: "Unlimited",
          team: "Unlimited",
        },
      },
      {
        name: "Sync snaps and folders",
        values: {
          free: true,
          starter: true,
          professional: true,
          team: true,
        },
      },
    ],
  },
  {
    name: "Collaboration",
    features: [
      {
        name: "Team members",
        values: {
          free: "-",
          starter: "-",
          professional: "-",
          team: "4 members",
        },
      },
    ],
  },
  {
    name: "Presentations",
    features: [
      {
        name: "Slides per presentation",
        values: {
          free: "5 (incl. watermark)",
          starter: "50",
          professional: "Unlimited",
          team: "Unlimited",
        },
      },
    ],
  },
]

const plans = [
  {
    name: "Free",
    icon: <Building2 className="w-8 h-8 text-blue-600" />,
    price: { monthly: 0, yearly: 0 },
    buttonText: "Login",
    buttonStyle: "bg-gray-100 hover:bg-gray-200 text-gray-900",
  },
  {
    name: "Starter",
    icon: <Medal className="w-8 h-8 text-yellow-500" />,
    price: { monthly: 5, yearly: 60 },
    buttonText: "⚡️ Upgrade",
    buttonStyle: "bg-purple-500 hover:bg-purple-600 text-white",
  },
  {
    name: "Professional",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    price: { monthly: 9, yearly: 108 },
    buttonText: "✨ Upgrade",
    buttonStyle: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
    featured: true,
  },
  {
    name: "Team",
    icon: <Users className="w-8 h-8 text-purple-500" />,
    price: { monthly: 32, yearly: 384 },
    buttonText: "+ Create",
    buttonStyle: "bg-purple-500 hover:bg-purple-600 text-white",
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pricing</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-sm font-medium">Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} className="data-[state=checked]:bg-purple-500" />
            <span className="text-sm font-medium">Yearly</span>
            {isYearly && <span className="text-purple-600 text-sm font-medium">Save 33% ↓</span>}
          </div>
          <p className="text-sm text-gray-500">Price in USD. VAT may apply.</p>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-[1fr_repeat(4,minmax(200px,1fr))] gap-8 items-start">
            <div /> 
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[20px] ${
                  plan.featured ? "border-2 border-purple-400" : "border border-gray-200"
                }`}
              >
                <div className="p-8">
                  <div className="text-center">
                    <div className="mb-4">{plan.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className={`text-4xl font-bold ${plan.featured ? "text-purple-500" : ""}`}>
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    {isYearly && plan.price.yearly > 0 && (
                      <div className="text-sm text-gray-500 mb-6">Billed ${plan.price.yearly} yearly</div>
                    )}
                  </div>

                  <Button className={`w-full ${plan.buttonStyle}`} size="lg">
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}

            {categories.map((category) => (
              <div key={category.name} className="col-span-full grid grid-cols-[1fr_repeat(4,minmax(200px,1fr))] gap-8">
                <h3 className="text-xl font-bold mt-8">{category.name}</h3>
                <div className="col-span-4" />
                {category.features.map((feature) => (
                  <React.Fragment key={feature.name}>
                    <div className="text-sm text-gray-600">
                      <span className="border-b border-dotted border-gray-300">{feature.name}</span>
                    </div>
                    {plans.map((plan) => (
                      <div key={`${feature.name}-${plan.name}`} className="text-center">
                        {typeof feature.values[plan.name.toLowerCase() as keyof typeof feature.values] === "boolean" ? (
                          feature.values[plan.name.toLowerCase() as keyof typeof feature.values] ? (
                            <Check className="w-5 h-5 mx-auto text-purple-500" />
                          ) : (
                            "-"
                          )
                        ) : (
                          <span className="text-sm">
                            {feature.values[plan.name.toLowerCase() as keyof typeof feature.values]}
                          </span>
                        )}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

