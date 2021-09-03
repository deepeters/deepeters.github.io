import React from 'react';
import about from "../images/about.jpg";

//Styled Components
import {StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";

//Framer Motion
import { motion } from 'framer-motion';

const AboutSection = () => {


    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2>
                            Hello, I am Dennis
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>
                             a <span> Software Engineer </span> & 
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>
                            an African literature enthuthiast
                        </motion.h2>
                    </StyledHide>
                </motion.div>
                <p> Contact me for discussions and collaborations </p>
                <button>Contact</button>
            </StyledDescription>
            <StyledImage>
                <img src={ about } alt="Dennis is a portrait" />
            </StyledImage>
        </StyledAbout>
    )
}


export default AboutSection;
