export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-gray-300">Chetna</span> 👋
          </h1>

          <p className="mt-6 text-xl text-gray-400">
            Java Backend Developer | Spring Boot | REST APIs
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed">
            3+ years in enterprise IT. I design and build scalable backend systems 
            with secure authentication, clean architecture, and performance-focused design.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://github.com/chetnashedame"
              target="_blank"
              className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
            >
              View Projects
            </a>
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
            <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition">
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
            <div className="bg-gray-800 p-8 rounded-2xl hover:scale-105 transition">
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
    </main>
  );
}