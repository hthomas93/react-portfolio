import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="row">
                <div className="col-md-6 me">
                    <img src={require(`../../../src/meicon.png`)}></img>
                </div>
                <div className="col-md-6 welcome black">
                    <h1>I'm your guy.</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;