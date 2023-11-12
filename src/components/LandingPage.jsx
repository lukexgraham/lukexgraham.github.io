import React from "react";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
    return (
        <div id="landing-page">
            <div className="container">
                <div className="content-box">
                    <h1 className="landing-title">
                        Hey, I'm <span style={{ color: "#42776a" }}>Lucas</span>{" "}
                        - A&nbsp;
                        <span>
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={[
                                    1000,
                                    "Software Developer",
                                    3000,
                                    "Problem Solver",
                                    3000,
                                    "Team Player",
                                    3000,
                                ]}
                                repeat={Infinity}
                            />
                        </span>
                        <br />
                        From Edinburgh
                        <span style={{ color: "#42776a" }}>.</span>
                    </h1>
                    <p>
                        I am a highly motivated individual seeking the
                        opportunity to start a full-time career where I can
                        build upon the skills that I've gained and developed
                        throughout my time at university.
                    </p>
                    <a
                        className="email-link"
                        href="mailto:lukexgraham@gmail.com"
                    >
                        lukexgraham@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
