import ProjectCard from "./ProjectCard"
import { LanguageContext } from "../../context/LanguajeContext"
import { useContext } from "react"

function Projects() {
    const { t } = useContext(LanguageContext)
    const academicProjects = t.projects.filter(p => p.origin === "academic")

    return (

        <section id="projects">

            <h2>{t.nav.projects}</h2>

            <div className="projects-grid">

                {academicProjects.map((p, i) => (
                    <ProjectCard key={i} project={p} />
                ))}

            </div>

        </section>

    )
}

export default Projects