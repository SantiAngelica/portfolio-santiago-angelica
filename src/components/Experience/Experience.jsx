
import ProjectCard from "../Projects/ProjectCard.jsx"
import { LanguageContext } from "../../context/LanguajeContext"
import { useContext } from "react"


function Experience() {
    const { t } = useContext(LanguageContext)
    const freelanceProjects = t.projects.filter(p => p.origin === "freelance")

    return (

        <section id="experience">

            <h2>{t.nav.experience}</h2>

            <div className="experience-card d-flex">
                <div className="desc">

                    <h3>{t.freelanceExperience.title}</h3>

                    <span className="experience-date">{t.freelanceExperience.date}</span>

                    <p>
                        {t.freelanceExperience.description}
                    </p>

                    <ul>

                        {t.freelanceExperience.responsibilities.map((r, i) => {
                            return <li key={i}>{r}</li>
                        })}
                    </ul>
                </div>


                <div className="freelance-grid mt-0 ">
                    <h3>Trabajos:</h3>
                    {freelanceProjects.map((p, i) => (

                        <ProjectCard key={i} project={p} />

                    ))}

                </div>
            </div>


        </section>

    )
}

export default Experience