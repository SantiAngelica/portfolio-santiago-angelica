import { LanguageContext } from "../../context/LanguajeContext"
import { useContext } from "react"
import cv from "../../data/cv.pdf"
import cv_english from "../../data/cv_english.pdf"

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

                <a href={cv} className="btn-outline" download={"CV_Santiago_Angelica_Backend_Developer.pdf"}>
                        CV en Español
                </a>
                <a href={cv_english} className="btn-outline" download={"CV_Santiago_Angelica_Backend_Developer.pdf"}>
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