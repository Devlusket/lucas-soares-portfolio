export default function Header() {
  return (
    <header className="w-full bg-header bg-gray-400 text-white py-7 px-6 flex justify-between items-center font-mono text-sm">
      <a href="#header" className="font-bold text-indigo-800 text-xl hover:text-indigo-500">Lucas Soares</a>
      <nav className="space-x-6 font-bold text-indigo-800 text-xl">
        <a href="#curriculum" className="hover:underline hover:text-indigo-500 scroll-smooth">Curriculum</a>
        <a href="#projects" className="hover:underline hover:text-indigo-500 scroll-smooth">Projects</a>
        <a href="#hireme" className="hover:underline hover:text-indigo-500 scroll-smooth">Hire Me</a>
      </nav>
    </header>
  );
}