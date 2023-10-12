import React from "react";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import FeaturedWork from "./components/FeaturedWork";
import Modal from "./components/Modal";

function App() {
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState(null);
    const handleOpen = (project) => {
        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        setOpen(true);
        setProject(project);
    };

    return (
        <>
            <NavBar />
            <main>
                <LandingPage />
                <FeaturedWork toggleModal={handleOpen} />
            </main>
            {open ? (
                <Modal
                    handleClose={() => {
                        setOpen(false);
                        const scrollY = document.body.style.top;
                        document.body.style.position = "relative";
                        document.body.style.top = "0";
                        window.scrollTo(0, parseInt(scrollY || "0") * -1);
                    }}
                    show={true}
                    project={project}
                />
            ) : null}
        </>
    );
}

export default App;
