import { desc } from "framer-motion/client"

const es = {

    nav: {
        about: "Sobre mí",
        stack: "Stack",
        projects: "Proyectos",
        experience: "Experiencia",
        contact: "Contacto"
    },

    hero: {
        role: "Backend Developer",
        text: "Especializado en .NET, API`s escalables y documentadas.",
        desc: "Construyo soluciones con Clean Architecture, APIs de alta performance y sistemas escalables",
        projectsBtn: "Ver proyectos",
        cvBtn: "Descargar CV",

    },
    about: {
        aboutme: "Backend Developer Junior especializado en .NET, Clean Architecture y REST APIs. Apasionado por diseñar sistemas escalables y escribir código limpio y mantenible. Diseñe sistemas para gestion de inventarios con capacidad para organizar +600 registros, y preparados para escalar a medida que el negocio crece. Implementé APIs RESTful con .NET, siguiendo principios de Clean Architecture para garantizar código modular y fácil de mantener. Utilizando principios SOLID y patrones de diseño, logré reducir la deuda técnica y mejorar la calidad del código, lo que resultó en una mayor eficiencia en el desarrollo y mantenimiento de las aplicaciones backend."
    },

    TechStack: {
        titleOne: "Tecnologias",
        titleTwo: "Arquitecturas, Patrones y Metodologías"
    },

    projects: [
        {
            title: "Stock Manager RGD",
            description: "Desarrollo y mantenimiento de API REST para gestión de stock y ventas en un negocio de repuestos de televisores. Encargado de toda la aplicaion, diseñada para resistir la carga y transferencia de +600 registros. Con modulo de registro y roles.",
            tech: [".NET", "Entity Framework", "SQL Server", "JWT", "Clean Architecture", "DDD", "React"],
            github: "https://github.com/SantiAngelica/Gestionador-de-Productos---RGD",
            origin: "freelance",
        },
        {
            title: "Football Finder",
            description: "Desarrollo de aplicacion para encuentros futbolisticos, reservas en predios, manejo de canchas y horarios, sistema de logueos, jerarquia de roles. Encargado del Backend. Trabajo final de carrer universitaria.",
            tech: [".NET", "Entity Framework", "SQL Server", "JWT", "Clean Architecture", "DDD", "SOLID"],
            github: "https://github.com/SantiAngelica/Trabajo_Practico_Integrador",
            origin: "academic",
        },

        {
            title: "Funes Snickers",
            description: "Desarrollo de API REST para la venta de calzado, Encargado de toda la aplcacion, con carrito de compras, sitema de logeo y resistro, y modo administrados para toda la app.",
            tech: ["NodeJs", "MVC", "MongoDB", "Mongoose", "JWT", "Handlebars"],
            github: "https://github.com/SantiAngelica/Funes-Snickers",
            origin: "academic",
        }

    ],

    freelanceExperience: {
        title: "Desarrollador Web Freelance",
        date: "2024 - Presente",
        description: "Desarrollo de aplicaciones web y APIs para clientes utilizando tecnologías modernas del ecosistema .NET y JavaScript.",
        responsibilities: [
            "Diseño y desarrollo de APIs REST con .NET y Entity Framework",
            "Implementación de Clean Architecture y patrones Repository / Service",
            "Gestión de bases de datos con SQL Server",
            "Autenticación y autorización utilizando JWT",
            "Desarrollo de interfaces con React",
            "Despliegue de aplicaciones en la nube"
        ]

    },

    contact: {
        desc: "Estoy disponible para nuevas oportunidades, proyectos freelance o colaboraciones. Si querés trabajar conmigo, no dudes en contactarme.",
        phone: "Teléfono",
    }



}

export default es