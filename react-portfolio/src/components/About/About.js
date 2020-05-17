import React from "react";
import "./About.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                    <p>
                        I am a web developer from Austin, Texas. I specialize in using the MERN stack to create mobile-first, aesthetically principled and functional apps. I bring a multidisciplinary approach to programming with a professional background in restaurant management and an education in English. I am seeking a position where I can improve both my leadership and programming skills in a fast-paced and challenging work environment.
            </p>
                </div>
            </div>

            {/* Technologies */}
            <div className="row techRow">
                <FontAwesomeIcon icon={"js-square"}></FontAwesomeIcon>
            </div>
            {/* Insert a div that has icons of all of the tech I use */}
            {/* <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>jQuery</li>
            </ul> */}

            {/* Personal */}
            <p>
                My hobbies beyond work include reading, writing, watching films and fitness.
            </p>
        </div>
    );
}

export default About;