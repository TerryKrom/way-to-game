import React from 'react';
import './mainAbout.css';
import { Link } from 'react-router-dom';

const MainAbout = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h2>Find your Way to Game!</h2>
                <p>Welcome to Way to Game, where gaming meets affordability! We believe that the joy of gaming should be accessible to everyone, without the need for piracy or breaking the bank. Our platform is dedicated to showcasing a vast collection of free-to-play games that provide endless entertainment without costing you a dime. Explore a world where fun knows no boundaries, and gaming is truly for everyone!</p>
            </div>
            <div className="about-center">
                <h2>Our mission</h2>
                <p>At Way to Game, we're on a mission to redefine the gaming experience. No more compromising on the quality of your gaming adventures or resorting to piracy. Our carefully curated selection of free-to-play games ensures that you can dive into thrilling virtual worlds without spending a fortune. Discover a treasure trove of entertainment that proves you don't need to break the bank to have an amazing gaming experience. Join us on the journey where every gamer, regardless of budget, can enjoy the best that the gaming world has to offer.</p>
                <div className="api-text">
                    <p>This project was made using </p>
                    <Link to="https://freetogame.com">Free To Game API &copy;</Link>
                </div>
            </div>
            <div className="about-bottom">
                <div className="social-icons">
                    <Link class="fa-brands fa-github" rel='noreferrer' target="_blank" to='https://github.com/terrykrom/way-to-game'></Link>
                    <Link class="fa-brands fa-linkedin" rel='noreferrer' target="_blank" to='https://linkedin.com/in/guilherme-lopes-avila'></Link>
                    <Link class="fa-brands fa-instagram" rel='noreferrer' target="_blank" to='https://instagram.com/terrykrom'></Link>
                </div>
            </div>
        </div>
    );
}

export default MainAbout;