// // export default function Projects() {
// //   const projects = [1, 2, 3];

// //   return (
// //     <section id="projects" className="px-6 py-10 text-center">
// //       <h2 className="text-xl sm:text-2xl font-bold mb-8 text-white">
// //         Here are some of my most recent projects
// //       </h2>
// //       <div className="bg-gray-500 rounded-lg p-2 mb-4 justify-center">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         {projects.map((project) => (
// //           <div key={project} className="bg-header text-white p-4 rounded-xl">
// //             <div className="bg-black h-72 rounded-md mb-4" />
// //             <h3 className="text-lg font-bold mb-2">project {project}</h3>
// //             <p className="text-base">
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, inventore. Doloribus, adipisci ad? Doloribus corrupti reiciendis quis debitis, ducimus odio incidunt, doloremque eum cupiditate laborum nam iure eveniet inventore ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum autem fugit architecto necessitatibus dolor reiciendis quo reprehenderit voluptatum impedit, unde accusamus, perferendis distinctio nobis alias voluptate quia optio eum.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
// //         <a
// //           href="https://www.linkedin.com/in/devlusket/"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="bg-indigo-800 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700"
// //         >
// //          Go to project
// //         </a>
// //         <a
// //           href="https://www.linkedin.com/in/devlusket/"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="bg-indigo-800 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700"
// //         >
// //          See the code
// //         </a>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       </div>
// //     </section>
// //   );
// // }

// export default function Projects() {
//   const projects = [
//     {
//       id: 1,
//       title: "Expenses App",
//       description:
//         "This project is a personal expense tracking app, developed using Next.js with TypeScript for the frontend, ensuring a more robust and typed code. The design was done with Tailwind CSS, providing a clean, responsive and easy-to-maintain interface. The app includes features to add, list, mark as paid and delete expenses. The backend part was developed with the help of ChatGPT, using Node.js, manipulating data stored in a JSON file. The API allows GET, POST, PUT and DELETE operations, allowing interaction with expenses. The application was designed to be responsive, adjusting to different screen sizes, from mobile devices to desktops. Light and dark modes were implemented to improve the user experience. As a frontend programmer still in the learning process, I used the most modern and efficient technologies to create this app, taking advantage of the best development and architecture practices to ensure a pleasant and efficient experience for the user.",
//       image: "/images/despesasv2.png",
//       liveUrl: "https://expenses-app-project.vercel.app/",
//       codeUrl: "https://github.com/Devlusket/expenses-project",
//     },
//     {
//       id: 2,
//       title: "Power Rangers Quiz",
//       description:
//         "Personal project developed with React, Next.js, Tailwind CSS and TypeScript. I used json-server to simulate a local API during development. For deployment on Vercel, the data was migrated to the frontend for compatibility. The quiz includes scoring logic, answer shuffling and result with final image. The project was created to test my skills in React and Next.js, focusing on creating a fun and interactive experience for users. The design was customized with Tailwind CSS to ensure a modern and responsive interface. The quiz is fully functional, allowing users to answer questions about the Power Rangers universe and receive a final score based on their performance. ",
//       image: "/images/powerrangers.png",
//       liveUrl: "https://powerrangersquiz.vercel.app/",
//       codeUrl: "https://github.com/Devlusket/pr-quiz-ts-next-project",
//     },
//     {
//       id: 3,
//       title: "Todo List App",
//       description:
//         "This project was developed using React and Next.js, with a focus on creating an interactive and responsive goal manager. As a Frontend developer, I was responsible for implementing the user interface, ensuring that the experience was intuitive and enjoyable. The visual structure and interactivity of the application was built in a modular way, using React to manage components efficiently, in addition to customizing the design with Tailwind CSS for a modern and clean aesthetic. With the help of AI, I was able to configure and optimize the API routes, implement goal persistence in the database, and fix integration errors between the Frontend and Backend. AI also helped me better understand the data flows between the application layers and improve the logic for handling data sent and received by the API. In this way, the Frontend part was entirely developed by me, including design and interactive features. The Backend/API part was implemented based on my interaction with AI",
//       image: "/images/metas.png",
//       liveUrl: "https://todo-list-two-pi-38.vercel.app/",
//       codeUrl: "https://github.com/Devlusket/todo-list-v3-project",
//     },
//   ];

//   return (
//     <section id="projects" className="px-6 py-25 text-center">
//       <h2 className="text-xl sm:text-2xl font-bold mb-8 text-white">
//         Here are some of my most recent projects
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className=" bg-indigo-800/50 text-white p-4 rounded-xl shadow-md flex flex-col"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="h-78 object-cover rounded-md mb-4"
//             />
//             <h3 className="text-lg font-bold mb-2">{project.title}</h3>
//             <p className="text-sm text-left">{project.description}</p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 mt-auto">
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-indigo-800 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700"
//               >
//                 Go to project
//               </a>
//               <a
//                 href={project.codeUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-indigo-800 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700"
//               >
//                 See the code
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Aplicativo de Despesas",
      description:
        "Aplicativo pessoal de controle de despesas desenvolvido com Next.js e TypeScript, com design em Tailwind CSS. Permite adicionar, listar, marcar como pago e excluir despesas. Backend feito com Node.js e manipulação de um arquivo JSON simulando banco de dados. Totalmente responsivo, com modo claro e escuro.",
      image: "/images/despesasv2.png",
      liveUrl: "https://expenses-app-project.vercel.app/",
      codeUrl: "https://github.com/Devlusket/expenses-project",
    },
    {
      id: 2,
      title: "Quiz dos Power Rangers",
      description:
        "Quiz interativo feito com React, Next.js, Tailwind CSS e TypeScript. Usa json-server localmente e migrado para o frontend para funcionar no Vercel. Contém lógica de pontuação, embaralhamento de respostas e resultado final com imagem. Foco em aprendizado e experiência divertida.",
      image: "/images/powerrangers.png",
      liveUrl: "https://powerrangersquiz.vercel.app/",
      codeUrl: "https://github.com/Devlusket/pr-quiz-ts-next-project",
    },
    {
      id: 3,
      title: "Lista de Tarefas",
      description:
        "Gerenciador de metas feito com React e Next.js, focado em interatividade e responsividade. Interface criada com Tailwind. Backend feito com ajuda de IA, incluindo rotas de API, persistência de dados e correção de erros. Todo o frontend foi desenvolvido por mim, com design e funcionalidades interativas.",
      image: "/images/metas.png",
      liveUrl: "https://todo-list-two-pi-38.vercel.app/",
      codeUrl: "https://github.com/Devlusket/todo-list-v3-project",
    },
  ];

  return (
    <section id="projects" className="px-6 py-25 text-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-8 text-white">
        Aqui estão alguns dos meus projetos mais recentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-indigo-800/50 text-white p-4 rounded-xl shadow-md flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-78 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-left">{project.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 mt-auto">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-800 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700"
              >
                Ver Projeto
              </a>
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-800 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700"
              >
                Ver Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
