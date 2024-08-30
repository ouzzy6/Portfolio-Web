import React from "react";
import '../components/Projects.css'
import project1Image from '../media/Captura de pantalla 2024-08-21 202649.png'
import project2Image from '../media/Captura de pantalla 2024-06-28 121129.png'
import project3Image from '../media/Captura de pantalla 2024-08-21 204223.png'
import project4Image from '../media/Captura de pantalla 2024-08-30 122041.png'

const projects = [
    {
        id: 1,
        title: "Porsche Clon Website",
        description: "Clon for the Porshche landing page using HTML, CSS and basic JS.",
        image: project1Image, // Reemplaza con la ruta de tu imagen
        link: "https://github.com/develhope/FS-ESP10-Team1-Project1/tree/develop" // Reemplaza con el enlace a tu proyecto
    },
    {
        id: 2,
        title: "Sticker Web Clon",
        description: "Website for stickers, you can choose the number and the size and add to cart for the checkout and final price. Made with HTML, CSS and JS.",
        image: project2Image, // Reemplaza con la ruta de tu imagen
        link: "https://github.com/develhope/FS-ESP10-Team1-Project2/tree/develop" // Reemplaza con el enlace a tu proyecto
    },
    {
        id: 3,
        title: "To-Do List",
        description: "App to add notes, update it's status and set the urgency of the task.",
        image: project3Image, // Reemplaza con la ruta de tu imagen
        link: "https://ousamalist.netlify.app/" // Reemplaza con el enlace a tu proyecto
    },
    {
        id: 4,
        title: "IP-Search",
        description: "Get information for an IP address.",
        image: project4Image, // Reemplaza con la ruta de tu imagen
        link: "https://main--clinquant-malabi-499f1e.netlify.app/" // Reemplaza con el enlace a tu proyecto
    }
]

function Projects() {

    return (
        <div className="projects">
            <h1 className="projects-title">Links</h1>
            <div className="projects-list">
                {projects.map(project => (
                    <div key={project.id} className="project-item">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Projects;