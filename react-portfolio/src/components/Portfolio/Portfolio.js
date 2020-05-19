import React from "react";
import "./Portfolio.css"

function Blog() {
    return (
        <div>
            <h1>Portfolio Page</h1>
            {/* The BookUp */}
            <div className="portfolio-entry row">
                <div className="col-md-4">
                    <a href="https://placeholder.com"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                </div>
                <div className="col-md-8 desc-block">
                    <p className="description">.</p>
                </div>
            </div>
            {/* The Pack is Back */}
            <div className="portfolio-entry row">
                <div className="col-md-4">
                    <a href="https://the-pack-is-back.herokuapp.com/"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                </div>
                <div className="col-md-8 desc-block">
                    <p className="description">Swiss Army app for vehicle enthusiasts. Allows the user to search for vehicles by VIN, save them to a favorites list, and view them. The user can also check for recalls on models of vehicles as well as search vehicle definitions. Built using MySQL, Node.js, JavaScript, and Express.</p>
                </div>
            </div>
            {/* Revelry */}
            <div className="portfolio-entry row">
                <div className="col-md-4">
                    <a href="https://phoenix-99hp.github.io/Project1/"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                </div>
                <div className="col-md-8 desc-block">
                    <p className="description">Revelry is an app that allows the user to search for events occurring in a city during a span of days. A five-day forecast of the city is provided as well. The app is built with HTML, CSS, JavaScript, Node.JS, and Express. Revelry uses the Ticketmaster and OpenWeatherApp APIs.</p>
                </div>
            </div>
            {/* Day Planner */}
            <div className="portfolio-entry row">
                <div className="col-md-4">
                    <a href="https://hthomas93.github.io/DayPlanner/"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                </div>
                <div className="col-md-8 desc-block">
                    <p className="description">The Day Planner is an app that allows the user to store hourly tasks using the browser's local storage. The color of the hourly entry changes live as the day progresses. The hours are displayed in military time.</p>
                </div>
            </div>
            {/* Password Generator */}
            <div className="portfolio-entry row">
                <div className="col-md-4">
                    <a href="https://hthomas93.github.io/PasswordHomework/"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                </div>
                <div className="col-md-8 desc-block">
                    <p className="description">The Password Generator is a simple app that asks the user through a series of prompts how they would like for their password to be styled. When the "Generate Password" button is clicked, a password with the chosen specifications is created. The user can then copy the password to the clipboard by clicking the "Copy Password" button.</p>
                </div>
            </div>
        </div>
    );
}

export default Blog;