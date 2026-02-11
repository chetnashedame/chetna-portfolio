"use client";
import { Github, Linkedin as LinkedInIcon, Mail, Phone } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      {/* NAVBAR */}
<nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 border-b border-gray-800">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="font-semibold text-lg">Chetna</h1>

    <div className="hidden md:flex gap-8 text-gray-400">
      <a href="#projects" className="hover:text-white transition">Projects</a>
      <a href="#contact" className="hover:text-white transition">Contact</a>
    </div>
  </div>
</nav>

      {/* HERO SECTION */}
<section className="min-h-screen flex items-center px-6 pt-24">
  <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">

    {/* LEFT SIDE - TEXT */}
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
<h1 className="text-5xl md:text-6xl font-bold tracking-tight">
  Hi, I'm{" "}
  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
    Chetna
  </span>{" "}
  👋
</h1>

<div className="mt-4 inline-block px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 text-sm rounded-full">
  Backend Engineer
  
</div>

<p className="mt-4 text-gray-500 max-w-md">
  3+ years of enterprise IT experience transitioning into backend development.
</p>

      <div className="mt-6 text-xl text-gray-400">
  <TypeAnimation
  sequence={[
    "Java Backend Developer",
    2000,
    "Spring Boot Specialist",
    2000,
    "REST API Designer",
    2000,
  ]}
  speed={40}
  repeat={Infinity}
/>
</div>

      <p className="mt-6 text-gray-500 leading-relaxed max-w-lg">
        I design and build scalable backend systems with secure authentication,
        clean architecture, and performance-focused design.
      </p>

      <div className="mt-10 flex gap-6 flex-wrap">
        <a
          href="https://github.com/chetnashedame"
          target="_blank"
          className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
        >
          GitHub
        </a>

        <a
          href="/Chetna_Resume.pdf"
          target="_blank"
          className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </div>
    </motion.div>

    {/* RIGHT SIDE - PHOTO */}
    <div className="flex justify-center md:justify-end">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-2xl opacity-40"></div>

        <Image
  src="/profile.png"
  alt="Chetna"
  width={260}
  height={260}
  className="relative rounded-full border-4 border-gray-800 object-cover shadow-2xl hover:scale-105 transition duration-300"
/>
      </div>
    </div>

  </div>
</section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Project 1 */}
            <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-gray-900 transition duration-300">
              <h3 className="text-2xl font-semibold">
                Credit Score Management System
              </h3>
              <p className="mt-4 text-gray-400">
                Built a secure REST API using Spring Boot with JWT authentication,
                role-based access control, and MySQL integration.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Tech: Java, Spring Boot, MySQL, JWT, Docker
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-gray-900 transition duration-300">
              <h3 className="text-2xl font-semibold">
                URL Shortener Service
              </h3>
              <p className="mt-4 text-gray-400">
                Designed and implemented a scalable URL shortening API
                with database indexing and optimized lookup performance.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Tech: Java, Spring Boot, JPA, MySQL
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
<section className="py-24 px-6 bg-black">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">
      Technical Skills
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      {/* Backend */}
      <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
        <ul className="space-y-2 text-gray-400">
          <li>Java 8+</li>
          <li>Spring Boot</li>
          <li>RESTful API Design</li>
          <li>Spring Security & JWT</li>
          <li>JPA / Hibernate</li>
        </ul>
      </div>

      {/* Database */}
      <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-6">Database</h3>
        <ul className="space-y-2 text-gray-400">
          <li>MySQL</li>
          <li>SQL Query Optimization</li>
          <li>Indexing</li>
          <li>Transaction Management</li>
        </ul>
      </div>

      {/* Core Concepts */}
      <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-6">Core Concepts & Tools</h3>
        <ul className="space-y-2 text-gray-400">
          <li>OOP Principles</li>
          <li>Collections Framework</li>
          <li>Multithreading Basics</li>
          <li>Git & GitHub</li>
          <li>Docker Basics</li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* EXPERIENCE SECTION */}
<section className="py-24 px-6 bg-gray-950">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">
      Experience
    </h2>

    <div className="bg-gray-800 p-10 rounded-2xl">
      <h3 className="text-2xl font-semibold">
        Java Backend Developer
      </h3>
      <p className="text-gray-400 mt-2">
        3+ Years in Enterprise IT Environment
      </p>

      <ul className="mt-6 space-y-3 text-gray-400 list-disc list-inside">
        <li>Built and designed backend applications using Java and Spring Boot.</li>
        <li>Developed RESTful APIs with secure authentication and validation.</li>
        <li>Worked with relational databases and optimized SQL queries.</li>
        <li>Debugged and analyzed backend issues in production environments.</li>
        <li>Collaborated with cross-functional teams to improve system reliability.</li>
      </ul>
    </div>
  </div>
</section>


      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">
            Contact
          </h2>

          <p className="text-gray-400 mb-8">
            I'm open to backend development opportunities and collaborations.
          </p>

          <div className="flex flex-col gap-6 items-center text-gray-300">

  <a
    href="tel:+918329606823"
    className="flex items-center gap-3 hover:text-white transition"
  >
    <Phone size={20} />
    +91 8329606823
  </a>

  <a
    href="mailto:chetnashedame54@gmail.com"
    className="flex items-center gap-3 hover:text-white transition"
  >
    <Mail size={20} />
    chetnashedame54@gmail.com
  </a>

  <a
    href="https://github.com/chetnashedame"
    target="_blank"
    className="flex items-center gap-3 hover:text-white transition"
  >
    <Github size={20} />
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/YOUR-LINKEDIN"
    target="_blank"
    className="flex items-center gap-3 hover:text-white transition"
  >
    <LinkedInIcon size={20} />
    LinkedIn
  </a>

</div>
        </div>
      </section>

    </main>
  );
}