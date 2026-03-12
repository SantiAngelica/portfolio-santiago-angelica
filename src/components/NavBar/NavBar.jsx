import { useState, useContext } from "react"
import { LanguageContext } from "../../context/LanguajeContext"
function Navbar() {
    const [open, setOpen] = useState(false)
    const { language, toggleLanguage, t } = useContext(LanguageContext)

    return (
        <nav className="navbar">

            <h1>Santiago Angelica</h1>

            <div
                className="menu-toggle"
                onClick={() => setOpen(!open)}
            >
                ☰
            </div>

            <ul className={open ? "nav-links active" : "nav-links"}>



                <li><a href="#about">{t.nav.about}</a></li>
                <li><a href="#stack">{t.nav.stack}</a></li>
                <li><a href="#projects">{t.nav.projects}</a></li>
                <li><a href="#experience">{t.nav.experience}</a></li>
                <li><a href="#contact">{t.nav.contact}</a></li>
                <button className="lang-switch" onClick={toggleLanguage}>

                    <div className={`switch-slider ${language === "en" ? "right" : ""}`}></div>

                    <span className="flag">🇪🇸</span>
                    <span className="flag">🇬🇧</span>

                </button>
            </ul>

        </nav>
    )
}

export default Navbar