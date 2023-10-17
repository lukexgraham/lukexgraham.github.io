import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Deep Learning Honours Project",
        src: "https://www.techdonut.co.uk/sites/default/files/styles/landing_pages_lists/public/what-is-screen-resolution_1042807015.jpg?itok=WCoZxuoC",
        tools: "Python, PyTorch, Docker",
        date: "September 2022 - March 2023",
        desc: [
            "Researched and Developed a quarry vehicle detection solution utilising satellite imagery and a deep learning object detection algorithm",
            "Gathered, labeled and processed a bespoke dataset of satellite imagery",
            "Developed and fine-tuned a CNN object detector to accurately identify vehicles in real-time",
            "Worked towards defined deadlines to give progress reports and final project presentation",
        ],
        img: "project-quarry.jpg",
    },
    {
        title: "Boston Railway Pathfinder",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdinQY2U9pKk6jqlWd8HR7EwCeKx5aOlR8VUxiLKWgkyqQ5oGlB_ftkGXntNkJpuA0lG8&usqp=CAU",
        tools: "Java, JavaFX",
        date: "February 2022 - April 2022",
        desc: [
            "Developed an interactive path finder for navigating the Boston railway network",
            "Powered by an A-star algorithm considering cost of travel time and line switching",
            "Built an intuitive UI-based desktop app using JavaFX to interface the backend in a decoupled architecture style",
            "Automated unit testing of the app using JUnit",
        ],
        img: "project-boston.png",
    },
    {
        title: "Wellbeing Mobile Web App",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdinQY2U9pKk6jqlWd8HR7EwCeKx5aOlR8VUxiLKWgkyqQ5oGlB_ftkGXntNkJpuA0lG8&usqp=CAU",
        tools: "HTML/ CSS, Javascript, PHP, MySQL",
        date: "February 2022 – March 2022",
        desc: [
            "Worked with peers to design and develop a mobile-focused web application comprised of a variety of mini games and puzzles aimed to stimulate the brain in a fun and interactive manner",
            "Employed the use of device geolocation sensors in game functionality to increase user immersion",
            "Implemented server-side leaderboard functionality and browser cookies allowing users to compare scores amongst others and themselves",
            "Utilised Git for version control and collaboration during development, allowing streamlined implementation of individual members’ contributions",
        ],
        img: "project-wellbeing.png",
    },
];

const FeaturedWork = ({ toggleModal }) => {
    return (
        <div id="featured-work">
            <div className="container">
                <h2 className="section-title">Featured Work.</h2>
                <div className="card-row">
                    <ProjectCard
                        project={projects[0]}
                        toggleModal={toggleModal}
                    />
                    <ProjectCard
                        project={projects[1]}
                        toggleModal={toggleModal}
                    />
                </div>
                <div className="card-row">
                    <ProjectCard
                        project={projects[2]}
                        toggleModal={toggleModal}
                    />
                </div>
            </div>
        </div>
    );
};

export default FeaturedWork;
