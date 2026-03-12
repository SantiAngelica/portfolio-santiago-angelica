const en = {

    nav: {
        about: "About",
        stack: "Stack",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact"
    },

    hero: {
        role: "Backend Developer",
        text: "Specialized in .NET, scalable and well-documented APIs.",
        desc: "I build solutions using Clean Architecture, high-performance APIs, and scalable systems.",
        projectsBtn: "View Projects",
        cvBtn: "Download CV",
    },

    about: {
        aboutme: "Junior Backend Developer specialized in .NET, Clean Architecture, and REST APIs. Passionate about designing scalable systems and writing clean, maintainable code. I designed inventory management systems capable of handling more than 600 records, prepared to scale as the business grows. I implemented RESTful APIs with .NET following Clean Architecture principles to ensure modular and maintainable code. By applying SOLID principles and design patterns, I reduced technical debt and improved code quality, resulting in greater efficiency in backend development and maintenance."
    },

    TechStack: {
        titleOne: "Technologies",
        titleTwo: "Architectures, Patterns and Methodologies"
    },

    projects: [
        {
            title: "Stock Manager RGD",
            description: "Development and maintenance of a REST API for stock and sales management in a TV spare parts business. Responsible for the entire application, designed to handle the load and transfer of more than 600 records. Includes registration module and roles.",
            tech: [".NET", "Entity Framework", "SQL Server", "JWT", "Clean Architecture", "DDD", "React"],
            github: "https://github.com/SantiAngelica/Gestionador-de-Productos---RGD",
            origin: "freelance",
        },
        {
            title: "Football Finder",
            description: "Development of an application for organizing football matches, field reservations, pitch and schedule management, login system and role hierarchy. Responsible for the backend. University final project.",
            tech: [".NET", "Entity Framework", "SQL Server", "JWT", "Clean Architecture", "DDD", "SOLID"],
            github: "https://github.com/SantiAngelica/Trabajo_Practico_Integrador",
            origin: "academic",
        },

        {
            title: "Funes Snickers",
            description: "Development of a REST API for a footwear sales platform. Responsible for the entire application, including shopping cart, login and registration system, and admin mode for the whole app.",
            tech: ["NodeJs", "MVC", "MongoDB", "Mongoose", "JWT", "Handlebars"],
            github: "https://github.com/SantiAngelica/Funes-Snickers",
            origin: "academic",
        }

    ],


    freelanceExperience: {
        title: "Freelance Web Developer",
        date: "2024 - Present",
        description: "Development of web applications and APIs for clients using modern technologies from the .NET and JavaScript ecosystem.",
        responsibilities: [
            "Design and development of REST APIs with .NET and Entity Framework",
            "Implementation of Clean Architecture and Repository / Service patterns",
            "Database management with SQL Server",
            "Authentication and authorization using JWT",
            "Frontend development with React",
            "Deployment of applications in the cloud"
        ]
    },

    contact: {
        desc: "I’m available for new opportunities, freelance projects, or collaborations. If you'd like to work with me, feel free to get in touch.",
        phone: "Phone",
    }

}

export default en