import { useState } from "react";
import "./App.css";
import SplashPage from "./components/SplashPage";
import WorkPost from "./components/WorkPost";

const projects = [
    {
        title: "Deep Learning Honours Project",
        src: "https://www.techdonut.co.uk/sites/default/files/styles/landing_pages_lists/public/what-is-screen-resolution_1042807015.jpg?itok=WCoZxuoC",
        tools: "Python, PyTorch, Docker",
        date: "September 2022 - March 2023",
        desc: "",
    },
    {
        title: "Boston Railway Pathfinder",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdinQY2U9pKk6jqlWd8HR7EwCeKx5aOlR8VUxiLKWgkyqQ5oGlB_ftkGXntNkJpuA0lG8&usqp=CAU",
        tools: "Java, JavaFX",
        date: "February 2022 - April 2022",
        desc: "java project",
    },
];

function App() {
    return (
        <>
            <SplashPage />
            <WorkPost project={projects[0]} />
            <WorkPost project={projects[1]} />
        </>
    );
}

export default App;
