"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Building2,
  Medal,
  Trophy,
  Users,
  Check,
  VideoIcon,
  Pencil,
  Share2,
  Wrench,
  HeadphonesIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Category {
  name: string;
  icon: React.ReactNode;
  experimental?: boolean;
  features: Feature[];
}

interface Feature {
  name: string;
  subtitle?: string;
  values: {
    free: React.ReactNode | string | number;
    starter: React.ReactNode | string | number;
    professional: React.ReactNode | string | number;
    team: React.ReactNode | string | number;
  };
}

const categories: Category[] = [
  {
    name: "Dashboard",
    icon: <Building2 className="w-5 h-5" />,
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
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
    ],
  },
  {
    name: "Video Export",
    icon: <VideoIcon className="w-5 h-5" />,
    experimental: true,
    features: [
      {
        name: "Frame rate",
        subtitle: "(incl. watermark)",
        values: {
          free: "30fps",
          starter: "30 fps",
          professional: "60 fps",
          team: "60 fps",
        },
      },
      {
        name: "Scale",
        values: {
          free: "1",
          starter: "2",
          professional: "4",
          team: "4",
        },
      },
      {
        name: "MP4 Export",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "GIF Export",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
    ],
  },
  {
    name: "Editor",
    icon: <Pencil className="w-5 h-5" />,
    features: [
      {
        name: "AI Explanations",
        values: {
          free: "5",
          starter: "50",
          professional: "100",
          team: "500",
        },
      },
      {
        name: "Profile info",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "Code editor per slide",
        values: {
          free: "1",
          starter: "2",
          professional: "Unlimited",
          team: "Unlimited",
        },
      },
      {
        name: "Code highlighting",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "Text elements per slide",
        values: {
          free: "5",
          starter: "10",
          professional: "Unlimited",
          team: "Unlimited",
        },
      },
      {
        name: "Form elements",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "Export Selected Element",
        values: {
          free: "-",
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "Snapping guidelines",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "Element Multi-Selection",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "Shortcuts",
        values: {
          free: "Basic",
          starter: "Pro",
          professional: "Pro",
          team: "Pro",
        },
      },
    ],
  },
  {
    name: "Sharing",
    icon: <Share2 className="w-5 h-5" />,
    features: [
      {
        name: "Export as image",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "Share as public URL",
        values: {
          free: "100 views / month",
          starter: "1,000 views / month",
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "Embedding",
        values: {
          free: "100 views / month",
          starter: "1,000 views / month",
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
    ],
  },
  {
    name: "API",
    icon: <Wrench className="w-5 h-5" />,
    features: [
      {
        name: "Simple Snap Calls",
        subtitle: "(incl. watermark)",
        values: {
          free: "-",
          starter: "50 / month",
          professional: "1,000 / month",
          team: "5,000 / month",
        },
      },
    ],
  },
  {
    name: "Integrations",
    icon: <Wrench className="w-5 h-5" />,
    features: [
      {
        name: "VS Code Extension",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "IntelliJ Plugin",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
    ],
  },
  {
    name: "Support",
    icon: <HeadphonesIcon className="w-5 h-5" />,
    features: [
      {
        name: "Live chat",
        values: {
          free: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          starter: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          professional: <Check className="w-5 h-5 mx-auto text-purple-500" />,
          team: <Check className="w-5 h-5 mx-auto text-purple-500" />,
        },
      },
      {
        name: "Priority",
        values: {
          free: "Low priority",
          starter: "Medium priority",
          professional: "High priority",
          team: "Highest priority",
        },
      },
    ],
  },
];

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
    buttonStyle:
      "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white",
    featured: true,
  },
  {
    name: "Team",
    icon: <Users className="w-8 h-8 text-purple-500" />,
    price: { monthly: 32, yearly: 384 },
    buttonText: "+ Create",
    buttonStyle: "bg-purple-500 hover:bg-purple-600 text-white",
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Pricing</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-sm font-medium">Monthly</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-purple-500"
            />
            <span className="text-sm font-medium">Yearly</span>
            {isYearly && (
              <span className="text-purple-600 text-sm font-medium">
                Save 33% ↓
              </span>
            )}
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
                  plan.featured
                    ? "border-2 border-purple-400 shadow-lg shadow-purple-100"
                    : "border border-gray-200"
                }`}
              >
                <div className="p-8">
                  <div className="text-center">
                    <div className="mb-4">{plan.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span
                        className={`text-4xl font-bold ${plan.featured ? "text-purple-500" : ""}`}
                      >
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    {isYearly && plan.price.yearly > 0 && (
                      <div className="text-sm text-gray-500 mb-6">
                        Billed ${plan.price.yearly} yearly
                      </div>
                    )}
                  </div>

                  <Button className={`w-full ${plan.buttonStyle}`} size="lg">
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}

            {categories.map((category) => (
              <div
                key={category.name}
                className="col-span-full grid grid-cols-[1fr_repeat(4,minmax(200px,1fr))] gap-8"
              >
                <h3 className="text-xl font-bold mt-8 flex items-center gap-2">
                  {category.icon}
                  {category.name}
                  {category.experimental && (
                    <Badge
                      variant="secondary"
                      className="bg-amber-50 text-amber-700 border-amber-200"
                    >
                      Experimental
                    </Badge>
                  )}
                </h3>
                <div className="col-span-4" />
                {category.features.map((feature) => (
                  <React.Fragment key={feature.name}>
                    <div className="text-sm text-gray-600">
                      <span className="border-b border-dotted border-gray-300">
                        {feature.name}
                      </span>
                      {feature.subtitle && (
                        <span className="text-xs text-gray-400 block mt-1">
                          {feature.subtitle}
                        </span>
                      )}
                    </div>
                    {plans.map((plan) => (
                      <div
                        key={`${feature.name}-${plan.name}`}
                        className="text-center"
                      >
                        {typeof feature.values[
                          plan.name.toLowerCase() as keyof typeof feature.values
                        ] === "boolean" ? (
                          feature.values[
                            plan.name.toLowerCase() as keyof typeof feature.values
                          ] ? (
                            <Check className="w-5 h-5 mx-auto text-purple-500" />
                          ) : (
                            "-"
                          )
                        ) : (
                          <span className="text-sm">
                            {
                              feature.values[
                                plan.name.toLowerCase() as keyof typeof feature.values
                              ]
                            }
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
  );
}
