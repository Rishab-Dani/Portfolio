"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaDocker,
  FaGitAlt,
  FaJava,
  FaLinux,
} from "react-icons/fa";
import {
  SiJenkins,
  SiHtml5,
  SiCss3,
  SiUbuntu,
  SiFlutter,
  SiDart,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import SectionHeader from "./section-header";

interface Technology {
  name: string;
  category:
    | "language"
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "framework"
    | "database"
    | "tools";
  icon: React.ReactNode;
  link: string;
}

const technologies: Technology[] = [
  { name: "Java", category: "language", icon: <FaJava className="w-5 h-5 text-orange-500" />, link: "https://www.java.com" },
  { name: "Flutter", category: "framework", icon: <SiFlutter className="w-5 h-5 text-blue-500" />, link: "https://www.google.com/aclk?sa=L&ai=DChsSEwjr5Jvc8pyRAxUjIoMDHayyCx4YACICCAEQABoCc2Y&ae=2&co=1&ase=2&gclid=CjwKCAiAlrXJBhBAEiwA-5pgwvgnETFOzGY92Ru6GU7WdKG8tTwP06F14NmTqMZS6P2YVqG0_RUuihoCOxMQAvD_BwE&ei=7s0tafyrJNWeseMPl9KakQo&cid=CAAS0wHkaP3s-PTkQQoMbPK5u9qO11pV1sb6GYfj4O8-ZZXRDyz_ozGfRCFc-ldFKMi2VJcun7AphbF7JjwuwbQyL5xxXrJ8IyAkoa1rcSRvSWtVmzrRnWQDqqgPeHZJ8P4XU38Zlo8MtuIPrEunyz7CZalYoq6bYo_f7m5NKnr7D8ZUPdReV0Z5ERsQeKB4mmsPli6W00Mp18FnJ9au1J6BU7VMR7gyfn9UjESOdwz-NvjQIpDdrIMx-KykkImDGEVHYHug5Y8y-dBID1h94vNIePFLzbSQ&cce=2&category=acrcp_v1_71&sig=AOD64_3AFV3zpl7kn62LuzI4WmAHqsNlIQ&q&sqi=2&nis=4&adurl&ved=2ahUKEwj82pfc8pyRAxVVT2wGHRepJqIQ0Qx6BAgXEAE" },
  { name: "Dart", category: "language", icon: <SiDart className="w-5 h-5 text-blue-500" />, link: "https://dart.dev/" },
  { name: "HTML", category: "frontend", icon: <SiHtml5 className="w-5 h-5 text-orange-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", category: "frontend", icon: <SiCss3 className="w-5 h-5 text-blue-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Jenkins", category: "devops", icon: <SiJenkins className="w-5 h-5 text-red-500" />, link: "https://www.jenkins.io" },
  { name: "Docker", category: "devops", icon: <FaDocker className="w-5 h-5 text-blue-400" />, link: "https://www.docker.com" },
  { name: "MySQL", category: "database", icon: <SiMysql className="w-7 h-7 text-sky-600" />, link: "https://prometheus.io" },
  { name: "Postgresql", category: "database", icon: <SiPostgresql className="w-5 h-5 text-blue-500" />, link: "https://grafana.com" },
  { name: "Firebase", category: "database", icon: <SiFirebase className="w-5 h-5 text-orange-500" />, link: "https://www.sonarqube.org" },
  { name: "Linux", category: "tools", icon: <FaLinux className="w-5 h-5 text-gray-600" />, link: "https://www.linux.org" },
  { name: "Ubuntu", category: "tools", icon: <SiUbuntu className="w-5 h-5 text-orange-500" />, link: "https://ubuntu.com" },
  { name: "Git", category: "tools", icon: <FaGitAlt className="w-5 h-5 text-orange-500" />, link: "https://git-scm.com" },
  { name: "Spring Boot", category: "framework", icon: <SiSpring className="w-5 h-5 text-green-500" />, link: "https://spring.io/projects/spring-boot" },
  { name: "Postman", category: "tools", icon: <SiPostman className="w-5 h-5 text-orange-500" />, link: "https://spring.io/projects/spring-boot" },
];

const categories = [
  { id: "language", name: "Languages", color: "from-blue-500 to-violet-500", icon: <FaJava className="w-6 h-6" /> },
  { id: "frontend", name: "Frontend", color: "from-blue-500 to-cyan-400", icon: <SiHtml5 className="w-6 h-6" /> },
  { id: "devops", name: "DevOps Tools", color: "from-violet-500 to-blue-500", icon: <FaDocker className="w-6 h-6" /> },
  { id: "framework", name: "Frameworks", color: "from-blue-500 to-violet-500", icon: <SiSpring className="w-6 h-6" /> },
  { id: "database", name: "DataBases", color: "from-blue-500 to-violet-500", icon: <SiPostgresql className="w-6 h-6" /> },
  { id: "tools", name: "OS & Utilities", color: "from-blue-500 to-violet-500", icon: <FaLinux className="w-6 h-6" /> },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-white text-gray-900">
      {/* Background Effects */}
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

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <SectionHeader
            title="Technical Expertise"
            description="Proficient in diverse technologies used to build secure, scalable cloud-native solutions"
          />

          {/* GRID STRUCTURE (unchanged) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute -inset-[1px] bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200`}
                  style={{ opacity: 0.1 }}
                />

                {/* Card */}
                <div className="relative h-full bg-white/80 p-6 sm:p-7 rounded-2xl border border-gray-200 backdrop-blur-md shadow-sm space-y-4 group-hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-gradient-to-r ${category.color} p-3.5 rounded-xl text-white shadow-md`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                      {category.name}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap mt-8 gap-3">
                    {technologies
                      .filter((t) => t.category === category.id)
                      .map((tech, index) => (
                        <Link
                          href={tech.link}
                          key={tech.name}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 cursor-pointer rounded-full text-sm bg-white/60 border border-gray-200 hover:border-gray-400 transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                          >
                            <span className="text-lg">{tech.icon}</span>
                            <span className="font-medium text-xs sm:text-sm text-gray-900 whitespace-nowrap">
                              {tech.name}
                            </span>
                          </motion.div>
                        </Link>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
