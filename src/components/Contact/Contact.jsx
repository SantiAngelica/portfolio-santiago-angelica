import { LanguageContext } from "../../context/LanguajeContext"
import { useContext } from "react"


function Contact() {
    const { t } = useContext(LanguageContext)
    return (

        <section id="contact">

            <h2>{t.nav.contact}</h2>

            <p className="contact-desc">
                {t.contact.desc}
            </p>

            <div className="contact-info">

                <div className="contact-item">
                    <h4>Email</h4>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=santiangelica410@gmail.com"
                        target="_blank"
                    >
                        santiangelica410@gmail.com
                    </a>
                </div>

                <div className="contact-item">
                    <h4>{t.contact.phone}</h4>
                    <a href="https://wa.link/z7uar3" target="_blank">
                        +54 9 341 511 9786
                    </a>
                </div>

                <div className="contact-item">
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com/in/santiangelica" target="_blank">
                        linkedin.com/in/santiangelica
                    </a>
                </div>

                <div className="contact-item">
                    <h4>GitHub</h4>
                    <a href="https://github.com/SantiAngelica" target="_blank">
                        https://github.com/SantiAngelica
                    </a>
                </div>

            </div>

        </section>

    )
}

export default Contact