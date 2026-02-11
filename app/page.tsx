export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6">
      
      <div className="max-w-3xl text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-gray-300">Chetna</span> 👋
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Java Backend Developer | Spring Boot | REST APIs
        </p>

        <p className="mt-6 text-gray-500 leading-relaxed">
          3+ years in enterprise IT. I design and build scalable backend systems 
          with clean architecture, secure authentication, and performance-focused design.
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

    </main>
  );
}