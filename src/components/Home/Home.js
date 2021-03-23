import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home">
            <div className="title">
            <h1>
                <p>Hi,</p>
                <p>I AM Swapnil </p>
                <p>I am a </p>
            </h1>
                <div class="wrapper">
                <div class="static-txt">I'm a</div>
                        <ul class="dynamic-txts">
                        <li><span>Engineer</span></li>
                        <li><span>Coder</span></li>
                        <li><span>Developer</span></li>
                        <li><span>web Designer</span></li>
                    </ul>
                </div>
            
            <Link to="about">
                <button>More Info</button>
            </Link>
            </div>
            <div className="person">
            <img className="image"
                src={`${process.env.PUBLIC_URL}/SWAPNIL.jpg`}
                alt="person picture" height="500"
            />
            </div>
        </div>

    );
};

export default Home;
