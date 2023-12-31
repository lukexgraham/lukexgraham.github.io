import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const getAssetSrc = (name) => {
    if (!name) {
        return;
    }
    const path = `/src/assets/images/${name}`;
    const modules = import.meta.glob("/src/assets/images/*", { eager: true });
    return modules[path].default;
};

const Modal = ({ handleClose, show, project }) => {
    const showHideClassName = show ? "display-block" : "display-none";
    return (
        <div id="modal" className={showHideClassName}>
            <div className="cover" onClick={handleClose} />
            <div className="modal-main">
                <div className="popup-buttons">
                    <span className="popup-button" onClick={handleClose}>
                        <AiOutlineClose size={"24px"} />
                    </span>
                </div>
                <div className="modal-top">
                    <div className="modal-image">
                        <img src={getAssetSrc(project.img)} alt={project.title} />
                    </div>
                </div>
                <div className="modal-bottom">
                    <p className="project-title">{project.title}</p>
                    {project.github ? (
                        <p className="project-github">
                            <a href={project.github}>
                                <AiFillGithub size={30} />
                            </a>
                        </p>
                    ) : null}
                    <p className="project-subheading">{project.tools}</p>
                    {project.website ? <a href={project.website}>lukexxgraham.co.uk</a> : null}
                    <ul>
                        {project.desc.map((desc) => (
                            <li>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Modal;
