export default function Projects() {
  const projects = [1, 2, 3];

  return (
    <section id="projects" className="px-6 py-10 text-center">
      <h2 className="text-xl sm:text-2xl font-bold mb-8 text-white">
        Here are some of my most recent projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project} className="bg-header text-white p-4 rounded-xl">
            <div className="bg-black h-72 rounded-md mb-4" />
            <h3 className="text-lg font-bold mb-2">project {project}</h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, inventore. Doloribus, adipisci ad? Doloribus corrupti reiciendis quis debitis, ducimus odio incidunt, doloremque eum cupiditate laborum nam iure eveniet inventore ut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum autem fugit architecto necessitatibus dolor reiciendis quo reprehenderit voluptatum impedit, unde accusamus, perferendis distinctio nobis alias voluptate quia optio eum.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}