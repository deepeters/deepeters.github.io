import React from 'react';
import about from "../images/about.jpg";

//Styled Components
import {StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";

//Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';

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
                    Contact me for discussions and collaborations.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolor commodi neque officia et magnam. Consequatur sequi maxime perferendis aperiam.
                </motion.p>
                <motion.button variants = { fade }>
                    Contact
                </motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img variants = { photoAnim } src={ about } alt="Dennis is a portrait" />
            </StyledImage>
        </StyledAbout>
    )
}


export default AboutSection;
