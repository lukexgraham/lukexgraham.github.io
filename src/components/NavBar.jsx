import React from "react";

const NavBar = ({ toggleCV }) => {
    return (
        <div id="navigation">
            <nav className="navbar container">
                <span className="title">lucasgraham</span>
                <span className="nav-link" onClick={toggleCV}>
                    CV
                </span>
                <a className="nav-link" href="https://github.com/lukexgraham">
                    github
                </a>
                <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/lucas-graham-677228261/"
                >
                    linkedin
                </a>
            </nav>
        </div>
    );
};

export default NavBar;
