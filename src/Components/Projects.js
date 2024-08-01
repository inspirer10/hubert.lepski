import React, { useState } from 'react';
import SingleProject from './SingleProject';
import ProjectsModal from './ProjectsModal';

function Projects() {
    const projectsData = [
        {
            name: 'Weather App',
            color: '#000',
            src: 'img1.jpg',
        },
        {
            name: 'Tuscany Restaurant',
            color: '#7e7e7e',
            src: 'img2.jpg',
        },
        {
            name: 'Feed India',
            color: '#b1b1b1',
            src: 'icon.png',
        },
        {
            name: 'Subscriptions Tracker',
            color: '#EFE8D3',
            src: 'img2.jpg',
        },
        {
            name: 'MUSTHAVE Webstore',
            color: '#706D63',
            src: 'img1.jpg',
        },
    ];

    const [modal, setModal] = useState({ active: false, index: 0 });

    return (
        <section>
            <h1>Projects</h1>

            <section id='projects-gallery'>
                <div className='projects-gallery-container'>
                    {projectsData.map((project, i) => (
                        <SingleProject
                            setModal={setModal}
                            index={i}
                            project={project}
                            key={i}
                        />
                    ))}
                </div>
                <ProjectsModal modal={modal} projects={projectsData} />
            </section>
        </section>
    );
}

export default Projects;
