import React from "react";
import "./Portfolio.css"

function Blog() {
    return (
        <div>
            <h1>Portfolio Page</h1>
            <hr></hr>


            {/* The BookUp */}
            <div>
                <div className="portfolio-entry row">
                    <div className="col-md-4">
                        <a href="https://the-bookup.herokuapp.com/"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                    </div>
                    <div className="col-md-8 desc-block">
                        <h2>The BookUp</h2>
                        <p className="description">The BookUp is a React app that allows users to upload used textbooks for sale to the website along with an asking price and their contact information. The seller enters information into the app and a GET request with the Google Books API return the information for the book. Prospective buyers can search the database by the book name or ISBN.</p>
                    </div>
                </div>
                <hr></hr>


                {/* The Pack is Back */}
                <div className="portfolio-entry row">
                    <div className="col-md-4">
                        <a href="https://the-pack-is-back.herokuapp.com/"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                    </div>
                    <div className="col-md-8 desc-block">
                        <h2>The Pack is Back</h2>
                        <p className="description">Swiss Army app for vehicle enthusiasts. Allows the user to search for vehicles by VIN, save them to a favorites list, and view them. The user can also check for recalls on models of vehicles as well as search vehicle definitions. Built using MySQL, Node.js, JavaScript, and Express.</p>
                    </div>
                </div>
                <hr></hr>


                {/* Revelry */}
                <div className="portfolio-entry row">
                    <div className="col-md-4">
                        <a href="https://phoenix-99hp.github.io/Project1/"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                    </div>
                    <div className="col-md-8 desc-block">
                        <h2>Revelry</h2>
                        <p className="description">Revelry is an app that allows the user to search for events occurring in a city during a span of days. A five-day forecast of the city is provided as well. The app is built with HTML, CSS, JavaScript, Node.JS, and Express. Revelry uses the Ticketmaster and OpenWeatherApp APIs.</p>
                    </div>
                </div>
                <hr></hr>


                {/* Day Planner */}
                <div className="portfolio-entry row">
                    <div className="col-md-4">
                        <a href="https://hthomas93.github.io/DayPlanner/"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                    </div>
                    <div className="col-md-8 desc-block">
                        <h2>Day Planner</h2>
                        <p className="description">The Day Planner is an app that allows the user to store hourly tasks using the browser's local storage. The color of the hourly entry changes live as the day progresses. The hours are displayed in military time.</p>
                    </div>
                </div>
                <hr></hr>


                {/* Password Generator */}
                <div className="portfolio-entry row">
                    <div className="col-md-4">
                        <a href="https://hthomas93.github.io/PasswordHomework/"><img className="placeholder" src="https://via.placeholder.com/150"></img></a>
                    </div>
                    <div className="col-md-8 desc-block">
                        <h2>Password Generator</h2>
                        <p className="description">The Password Generator is a simple app that asks the user through a series of prompts how they would like for their password to be styled. When the "Generate Password" button is clicked, a password with the chosen specifications is created. The user can then copy the password to the clipboard by clicking the "Copy Password" button.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Blog;