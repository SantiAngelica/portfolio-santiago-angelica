import { LanguageContext } from "../../context/LanguajeContext"
import { useContext } from "react"


function Hero() {
    const { t } = useContext(LanguageContext)


    return (

        <section className="hero">

            <h1>
                {t.hero.role}
            </h1>

            <h2>
                {t.hero.text}
            </h2>

            <p>
                {t.hero.desc}
            </p>

            <div className="hero-buttons">

                <a href="#projects" className="btn">
                    {t.hero.projectsBtn}
                </a>

                <a href="/public/data/cv.pdf" className="btn-outline" download={"CV_Santiago_Angelica_Backend_Developer.pdf"}>
                        CV en Español
                </a>
                <a href="/public/data/cv_english.pdf" className="btn-outline" download={"CV_Santiago_Angelica_Backend_Developer.pdf"}>
                        English Resume
                </a>
                <a href="https://www.linkedin.com/in/santiangelica/" className="btn-outline" target="blank">
                    Linkedin
                </a>

            </div>

        </section>

    )
}

export default Hero