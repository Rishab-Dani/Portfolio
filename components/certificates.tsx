"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeader from "./section-header";
import { certificates } from "@/lib/data";



export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-20 relative overflow-hidden bg-white text-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-100/60 to-white/0"
        style={{
          maskImage: "radial-gradient(ellipse at center, white, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, white, transparent)",
        }}
      />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-violet-500/20 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <SectionHeader
          title="Certificates"
          description="Professional certifications and cloud credentials I've earned"
        />

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {certificates.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="relative p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 mr-4 text-white bg-gradient-to-r from-blue-500 to-violet-500 rounded-full">
                  <item.icon />
                </div>
                

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-blue-500 hover:text-violet-500 transition-colors"
                      >
                        <span>View</span>
                        <FaExternalLinkAlt size={12} />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-600">{item.institution}</p>
                </div>
              </div>

              <div className="ml-16">
                <p className="mb-2 text-sm text-gray-500">{item.duration}</p>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
