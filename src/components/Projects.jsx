import ProjectCard from "./ProjectCard.jsx";

function Projects({projects}) {
  return (
    <section id="projects" className="section">
      <div className="container footer-inner">
        <h2 className="section-title">Featured<span className="gradient-text">Projects</span></h2>

        <div className="grid project-grid">
        {
          ProjectCard.map((project)=>(
          <ProjectCard key={project.id} project ={project}/>
          ))
        }
        </div>
      </div>
    </section>
  );
}

export default Projects;
