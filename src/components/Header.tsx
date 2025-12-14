export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-200/50 backdrop-blur-lg text-white py-5 px-6 font-mono text-sm shadow-md">
      <div className="flex justify-between items-center text-center">
        <a
          href="#header"
          className="font-bold text-indigo-800 text-xl hover:text-indigo-600 text-center items-center"
        >
          Lucas Soares
        </a>

        {/* Menu só visível em telas médias ou maiores */}
        <nav className="hidden md:flex space-x-6 font-bold text-indigo-800 text-xl">
          <a
            href="https://drive.google.com/file/d/1dDqCmWwAoMlP0EH-_daCfEZrR8lTmTw1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-600"
          >
            Currículo
          </a>
          <a href="#projects" className="hover:underline hover:text-indigo-600">
            Projetos
          </a>
          <a href="#hireme" className="hover:underline hover:text-indigo-600">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
