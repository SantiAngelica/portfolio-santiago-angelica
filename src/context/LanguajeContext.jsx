import { createContext, useState } from "react"
import es from "../translations/es"
import en from "../translations/en"

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {

    const [language, setLanguage] = useState("es")

    const toggleLanguage = () => {
        setLanguage(prev => prev === "es" ? "en" : "es")
    }
    const translations = {
        es,
        en
    }
    const t = translations[language]


    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}