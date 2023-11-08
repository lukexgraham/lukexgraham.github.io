import React from "react";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import FeaturedWork from "./components/FeaturedWork";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import CV from "./components/CV";

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [CVOpen, setCVOpen] = useState(false);
    const [project, setProject] = useState(null);
    const handleModalOpen = (project) => {
        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        setModalOpen(true);
        setProject(project);
    };
    const handleCVOpen = () => {
        const scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        setCVOpen(true);
    };

    return (
        <>
            <NavBar toggleCV={handleCVOpen} />
            <main>
                <LandingPage />
                <FeaturedWork toggleModal={handleModalOpen} />
            </main>
            <Footer />
            {modalOpen ? (
                <Modal
                    handleClose={() => {
                        setModalOpen(false);
                        const scrollY = document.body.style.top;
                        document.body.style.position = "relative";
                        document.body.style.top = "0";
                        window.scrollTo(0, parseInt(scrollY || "0") * -1);
                    }}
                    show={true}
                    project={project}
                />
            ) : null}

            {CVOpen ? (
                <CV
                    handleClose={() => {
                        setCVOpen(false);
                        const scrollY = document.body.style.top;
                        document.body.style.position = "relative";
                        document.body.style.top = "0";
                        window.scrollTo(0, parseInt(scrollY || "0") * -1);
                    }}
                    show={true}
                />
            ) : null}
        </>
    );
}

export default App;
