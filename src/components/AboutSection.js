import React from 'react';
import about from "../images/about.jpg";

const AboutSection = () => {
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Hello, I am Dennis</h2>
                    </div>
                    <div className="hide">
                        <h2> a <span> software engineer </span> and </h2>
                    </div>
                    <div className="hide">
                        <h2>an African literature enthuthiast</h2>
                    </div>
                </div>
                <p> Contact me for discussions and collaborations </p>
                <button>Contact</button>
            </div>
            <div className="image">
                <img src={ about } height = "600" alt="Dennis is a portrait" />
            </div>
        </div>
    )
}

export default AboutSection;
