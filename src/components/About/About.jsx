import { LanguageContext } from "../../context/LanguajeContext"
import { useContext } from "react"

function About() {
    const { t } = useContext(LanguageContext)
    return (

        <section id="about">

            <h2>{t.nav.about}</h2>

            <p>
                {t.about.aboutme}
            </p>

        </section>

    )
}

export default About