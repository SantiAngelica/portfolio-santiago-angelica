import { LanguageContext } from "../../context/LanguajeContext"
import { useContext } from "react"

function TechStack() {
    const { t } = useContext(LanguageContext)
    const stack = [
        ".NET",
        "C#",
        "ASP.NET Core",
        "Entity Framework",
        "SQL Server",
        "NodeJs",
        "Java Script",
        "Express",
        "MongoDB",
        "JWT",
        "Docker",
        "Azure",
        "React",
    ]
    const methodologies = [
        "Clean Architecture",
        "SOLID",
        "Domain Driven Design",
        "Agile Methodologies",
        "Model View Controller (MVC)",
        "Repository Pattern",
        "Dependency Injection",
        "Scrum",
        "Kanban",
    ]

    return (

        <section id="stack">

            <h2>{t.TechStack.titleOne}</h2>

            <div className="stack mb-5">

                {stack.map((tech, index) => (

                    <span key={index} className="tech">
                        {tech}
                    </span>

                ))}

            </div>
            <h2 className="mt-5">{t.TechStack.titleTwo}</h2>
            <div className="stack">

                {methodologies.map((tech, index) => (

                    <span key={index} className="tech">
                        {tech}
                    </span>

                ))}

            </div>

        </section>

    )
}

export default TechStack