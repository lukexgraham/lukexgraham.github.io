import React from "react";

const getAssetSrc = (name) => {
    if (!name) {
        return;
    }
    const path = `/src/assets/images/${name}`;
    const modules = import.meta.glob("/src/assets/images/*", { eager: true });
    return modules[path].default;
};

const ProjectCard = ({ project, toggleModal }) => {
    return (
        <div className="card-container">
            <div
                className="project"
                onClick={() => {
                    toggleModal(project);
                    document.body.style.overflow = "hidden";
                }}
            >
                <div className="image">
                    <img
                        src={getAssetSrc(project.img)}
                        alt={project.title}
                        srcSet=""
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
