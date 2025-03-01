"use client"

import { Twitter, Youtube } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  Product: ["Pricing", "Editor", "Templates", "Features", "Embedding"],
  Resources: ["Documentation", "Tutorials", "Blog", "User Stories", "Changelog"],
  Integrations: ["VS Code Extension", "IntelliJ Plugin"],
  About: ["Run by a human", "Imprint", "Legal"],
}

export function ModernFooter() {
  return (
    <footer className="footer-gradient mt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-8 text-black/90">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-white/10 p-2 rounded backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                <span className="font-mono text-lg">&lt;&gt;</span>
              </div>
              <span className="text-xl font-medium">snappify</span>
            </Link>
            <p className="text-black/80 mb-6 text-sm leading-relaxed">
              Create stunning Code Presentations
              <br />
              and smoothly animated videos.
            </p>
            <div className="flex gap-4 mb-6">
              <Link href="#" className="text-black hover:text-grey transition-colors hover:scale-110 transform">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-black hover:text-grey transition-colors hover:scale-110 transform">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-black/70 leading-relaxed">
              © seriouscode GmbH
              <br />
              All Rights Reserved.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-medium mb-4 text-lg text-black">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-black/70 hover:text-black/90 transition-colors text-sm inline-block hover:translate-x-0.5 transform"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4 items-center justify-between">
          <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-all rounded-lg px-4 py-2 text-sm text-white backdrop-blur-sm hover:scale-105 transform">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.342 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
            </svg>
            Join our Discord
          </button>
        </div>
      </div>
    </footer>
  )
}

