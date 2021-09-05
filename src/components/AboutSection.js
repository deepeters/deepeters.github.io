import React from 'react';
import about from "../images/about.jpg";

//Styled Components
import {StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from "./Wave";

const AboutSection = () => {


    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2 variants = { titleAnim }>
                            Hello, I am Dennis
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants = { titleAnim }>
                             a <span> Software Engineer </span> & 
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants = { titleAnim }>
                            an African literature enthuthiast
                        </motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants = { fade }> 
                    A Sofware Engineer with a keen interest in Machine Learning and its applications and implications on Information Systems Security and Data Privacy. Additionally, an African Literature enthuthiast, a closeted writer and author. 
                </motion.p>
                <motion.button variants = { fade }>
                    Contact
                </motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img variants = { photoAnim } src={ about } alt="Dennis is a portrait" />
            </StyledImage>
            <Wave />
        </StyledAbout>
    )
}


export default AboutSection;
