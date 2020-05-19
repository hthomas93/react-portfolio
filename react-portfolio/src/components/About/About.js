import React from "react";
import "./About.css";
import { FaJsSquare, FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";




function About() {
    return (
        <div>

            {/* Image, Professional Description */}
            <div className="row aboutRow">
                <div className="col-md-4">
                    <h1 className="myName">Harrison Thomas</h1>
                    <img className="justMe" src={require(`../../../src/images/justme.png`)}></img>
                </div>
                <div className="col-md-8 aboutMe">
                    <p className="about">
                        I am a web developer from Austin, Texas. I specialize in using the MERN stack to create mobile-first, aesthetically principled and functional apps. I bring a multidisciplinary approach to programming with a professional background in restaurant management and an education in English. I am seeking a position where I can improve both my leadership and programming skills in a fast-paced and challenging work environment.
                    </p>
                </div>
            </div>

            {/* First parallax image */}
            <div className="img1"></div>

            {/* Technologies */}
            <div className="row techRow">
                <FaJsSquare className="icons" />
                <FaReact className="icons" />
                <FaCss3 className="icons" />
                <FaHtml5 className="icons" />
                <FaBootstrap className="icons" />
                <FaNodeJs className="icons" />
                <FaGitSquare className="icons" />
                <p>Simple, elegant design using React and vanilla JavaScript. Focus on minimalism, clean code, subtlety.</p>
            </div>

            {/* Second parallax image */}
            <div className="img2"></div>

            <div className="aboutMe">
                {/* Personal */}
                <p className="personal">
                    My hobbies beyond work include reading, writing, watching films and fitness.
            </p>
            </div>
        </div>
    );
}

export default About;