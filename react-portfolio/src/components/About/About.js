import React from "react";
import "./About.css"

function About() {
    return (
        <div>
            <div className="row aboutRow">
                <div className="col-md-4">
                    <h1>Harrison Thomas</h1>
                    <img src={require(`../../../src/images/justme.png`)}></img>
                </div>
                <div className="col-md-8">
                    <p>
                        I am a web developer from Austin, Texas. I specialize in using the MERN stack to create mobile-first, aesthetically principled and functional apps. I bring a multidisciplinary approach to programming with a professional background in restaurant management and an education in English. I am seeking a positions where I can improve both my leadership and programming skills in a fast-paced and challenging work environment.
            </p>
                </div>
            </div>
            <h3>Technologies:</h3>
            <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>jQuery</li>
            </ul>
            <p>
                My hobbies beyond work include reading, writing, watching films and fitness.
            </p>
        </div>
    );
}

export default About;