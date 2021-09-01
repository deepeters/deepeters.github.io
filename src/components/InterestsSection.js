import React from "react";

//import Icons
import AI from "../images/AI.png";
import ML from "../images/machine-learning.png";
import IS from "../images/security.png";
import AL from "../images/african-woman.png";

//import images
import Interests from "../images/interests.jpg"

const InterestsSection = () => {
    return (
        <div className="projects">
            <div className="description">
                <h2>Proffessional <span> interests </span> and hobbies </h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src= {AI} height="100" alt="Artificial Intelligence" />
                            <h3>Artificial Intelligence</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src= {ML} height="100" alt="Machine Learning" />
                            <h3>Machine Learning</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src= {IS} height="100" alt="Information Security" />
                            <h3>Information Security</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src= {AL} height="100" alt="African Literature" />
                            <h3>African Literature</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src= {Interests} height = "600" alt="Interests Section" />
            </div>
        </div>
    )
}

export default InterestsSection;