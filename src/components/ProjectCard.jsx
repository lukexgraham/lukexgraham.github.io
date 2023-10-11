import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="card-container">
            <div className="project">
                {/*const ok = project.desc.map((bullet) => <li>{bullet}</li>);*/}
                <div className="image">
                    <img
                        src={"/" + project.img}
                        alt={project.title}
                        srcset=""
                    />
                </div>
                <div className="image-overlay">
                    <div className="image-overlay-text">
                        <p className="project-title">{project.title}</p>
                        <p className="project-subheading">{project.tools}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
