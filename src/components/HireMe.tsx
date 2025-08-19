// // app/components/HireMe.tsx
// export default function HireMe() {
//   return (
//     <section id="hireme" className="px-6 py-10 max-w-xl mx-auto text-center">
//       <h2 className="text-xl sm:text-2xl font-bold mb-6">Hire Me</h2>
//       <p className="mb-6 text-sm">
//         Interested in working together? You can send me a quick message by email or WhatsApp, or find me on GitHub and LinkedIn.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-5 justify-center">
//         <a
//           href="mailto:lucasoaresdev@hotmail.com"
//           className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600"
//         >
//           Send me an Email
//         </a>
//         <a
//           href="https://wa.me/5533984051527" // ex: 55 + DDD + número
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-green-500 text-white px-4 py-2 rounded font-bold hover:bg-green-600"
//         >
//           Message on WhatsApp
//         </a>
//         <a
//           href="https://github.com/Devlusket"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-slate-900 text-white px-4 py-2 rounded font-bold hover:bg-slate-700"
//         >
//          Find me on GitHub
//         </a>
//         <a
//           href="https://www.linkedin.com/in/devlusket/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-800 text-white px-4 py-2 rounded font-bold hover:bg-blue-600"
//         >
//          Here is my LinkedIn
//         </a>
//       </div>
//     </section>
//   );
// }


export default function HireMe() {
  return (
    <section id="hireme" className="px-6 py-10 max-w-xl mx-auto text-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Me Contrate</h2>
      <p className="mb-6 text-sm">
        Interessado em trabalhar comigo? Você pode me enviar uma mensagem rápida por e-mail ou WhatsApp, ou me encontrar no GitHub e LinkedIn.
      </p>
      <div className="flex flex-col sm:flex-row gap-5 justify-center">
        <a
          href="mailto:lucasoaresdev@hotmail.com"
          className="bg-red-500 text-white px-4 py-2 rounded font-bold hover:bg-red-600"
        >
          Me envie um E-mail
        </a>
        <a
          href="https://wa.me/5533984051527"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded font-bold hover:bg-green-600"
        >
          Me chame no WhatsApp
        </a>
        <a
          href="https://github.com/Devlusket"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 text-white px-4 py-2 rounded font-bold hover:bg-slate-700"
        >
          Veja meu GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/devlusket/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-white px-4 py-2 rounded font-bold hover:bg-blue-600"
        >
          Veja meu LinkedIn
        </a>
      </div>
    </section>
  );
}
