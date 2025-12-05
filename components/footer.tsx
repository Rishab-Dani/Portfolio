"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden bg-white text-gray-900">
      {/* ✨ Background (matching Experience & TechStack) */}
      <div className="absolute inset-0 bg-grid-black/[0.03] bg-[size:60px_60px]" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-100/60 to-white/0"
        style={{
          maskImage: "radial-gradient(ellipse at center, white, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse at center, white, transparent)",
        }}
      />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-violet-500/20 rounded-full blur-3xl" />

      {/* 💡 Footer Content */}
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative py-8 border-t border-gray-200"
        >
          <div className="text-center">
            {/* 📜 Copyright */}
            <div className="text-gray-600 text-sm">
              © {currentYear} Rishab. All rights reserved.
            </div>

            {/* ⚙️ Credit
            <div className="text-gray-600 text-sm">
              Built with{" "}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-violet-600 font-medium transition-colors duration-300"
              >
                Next.js
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-violet-600 font-medium transition-colors duration-300"
              >
                Tailwind CSS
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
