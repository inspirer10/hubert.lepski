import React from 'react';

function SingleProject({ project, index, setModal }) {
    const { name } = project;
    return (
        <div
            onMouseEnter={() => {
                setModal({ active: true, index });
            }}
            onMouseLeave={() => {
                setModal({ active: false, index });
            }}
            className='project'
        >
            <h2>{name}</h2>

            <p>Design & Development</p>
        </div>
    );
}

export default SingleProject;
