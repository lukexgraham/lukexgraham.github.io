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
                        document.body.style.overflow = "auto";
                    }}
                    show={true}
                    project={project}
                />
            ) : null}
        </>
    );
}

export default App;
