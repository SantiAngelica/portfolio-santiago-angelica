import Slider from "../Slider/Slider"

function ProjectCard({ project }) {

    return (

        <div className="project-card">
            <Slider urls={project.imgs}></Slider>
            <h3>{project.title}</h3>

            <p className="description">{project.description}</p>

            <div className="project-tech">

                {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                ))}

            </div>

            <a href={project.github} target="_blank">GitHub</a>

        </div>

    )
}

export default ProjectCard