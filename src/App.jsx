import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import FeaturedWork from "./components/FeaturedWork";

function App() {
    return (
        <>
            <NavBar />
            <main>
                <LandingPage />
                <FeaturedWork />
            </main>
        </>
    );
}

export default App;
