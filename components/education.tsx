"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeader from "./section-header";
import { educationData } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-14 relative overflow-hidden bg-white text-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-100/60 to-white/0"
        style={{
          maskImage: "radial-gradient(ellipse at center, white, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse at center, white, transparent)",
        }}
      />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-violet-500/20 rounded-full blur-3xl" />

      <div className="container relative px-4 md:px-6">
        <SectionHeader 
          title="Education" 
          description="My academic background and qualifications" 
        />

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {educationData.map((item) => (
<motion.div
  key={item.id}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white/80 backdrop-blur-md 
             cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
>
              <div className="relative flex items-start mb-4">
                <div className="relative p-2 mr-4  text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full">
                  <FaGraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-700">{item.institution}</p>
                </div>
              </div>
              <div className="ml-16">
                <p className="mb-2 text-sm text-gray-500">{item.duration}</p>
                <p className="mb-1 text-sm text-gray-700">{item.cgpa}</p>
                <div className="flex gap-4  text-sm text-gray-700">
                    <p className="mb-2">{item.hsc}</p>
                    <p className="mb-2">{item.sslc}</p>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
