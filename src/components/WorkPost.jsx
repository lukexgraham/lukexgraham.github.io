import React from "react";

const WorkPost = ({ project }) => {
    return (
        <div className="wrapper">
            <div className="work-post">
                <div className="content left">
                    <div className="work-post-head">
                        <h3>{project.title}</h3>
                        <p className="work-post-subheadings">
                            <span>{project.tools}</span>
                            <span className="right">
                                <i>{project.date}</i>
                            </span>
                        </p>
                    </div>
                    <div className="work-post-body">
                        <p>{project.desc}</p>
                    </div>
                </div>
                <div className="content right">
                    <img src={project.src} alt="#" />
                </div>
            </div>
        </div>
    );
};

export default WorkPost;
