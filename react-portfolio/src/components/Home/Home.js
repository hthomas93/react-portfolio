import React from "react";
import "./Home.css";

function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <img src={require(`../../../src/meicon.png`)}></img>
                </div>
                <div className="col-md-8 welcome">
                    <h1>I'm your guy.</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;