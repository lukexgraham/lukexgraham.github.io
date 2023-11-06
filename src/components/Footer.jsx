import React from "react";
import { IconContext } from "react-icons";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div className="footer-social">
                    <IconContext.Provider value={{ size: 36 }}>
                        <a href="https://github.com/lukexgraham">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/lucas-graham-677228261/">
                            <AiFillLinkedin />
                        </a>
                        <a href="mailto:lukexgraham@gmail.com">
                            <AiOutlineMail />
                        </a>
                    </IconContext.Provider>
                </div>
                <div className="footer-copyright">
                    <span>&copy; 2023, Lucas Graham</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
