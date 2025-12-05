"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "./section-header";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-14 relative overflow-hidden bg-white text-gray-900"
    >
      {/* Background Effects */}
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

      <div className="container relative px-4 md:px-6">
        <SectionHeader
          title="Featured Projects"
          description="Here are some of my recent projects that showcase my technical skills and problem-solving abilities."
        />

        {/* 2 cards per row, responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between p-6 rounded-xl border border-gray-200 
                         bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 
                         hover:shadow-lg hover:-translate-y-1 h-full min-h-[360px]"
            >
              {/* Header (Title + Icon) */}
              <div>
                <div className=" text-center  gap-4 mb-4">
                  <h3 className="text-xl font-semibold text-center text-gray-900">
                    {project.title}
                  </h3>
                </div>

                {/* 🖼️ Image BELOW the title */}
                {project.image && (
                  <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 mb-5 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 border border-gray-200
                                 text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 mt-auto">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>Source</span>
                </Link>
                {/* <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-600 transition-colors ml-auto"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt className="w-4 h-4" />
                </Link> */}
              </div>
            </motion.div>
          ))}
 {/* Explore More Projects Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative flex flex-col justify-center items-center text-center p-6 rounded-xl border border-gray-200 
                       bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 
                       hover:shadow-lg hover:-translate-y-1 h-full min-h-[360px]"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Explore More Projects
            </h3>
            <p className="text-gray-600 max-w-xs mb-6">
              Check out my repositories for more projects showcasing my skills
              in:
            </p>

<div className="flex flex-wrap gap-2 mb-8 justify-center">
  {["Java", "HTML/CSS", "Flutter/Dart"].map((tag, idx) => (
    <motion.span
      key={idx}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 border border-gray-200
                 text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-all duration-300"
    >
      {tag}
    </motion.span>
  ))}
</div>


            <a
              href="https://github.com/Rishab-Dani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span>View All Projects</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
