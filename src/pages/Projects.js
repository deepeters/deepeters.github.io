import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Images
import CE from '../images/CE.png';
import MA from '../images/MA.png';
import DF from '../images/DF.png'; 

//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animation';
import { sliderContainer, fade, photoAnim, lineAnim, slider, swoopAdoop } from '../animation';
import { useScroll } from '../components/useScroll';



const Projects = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return(
        <StyledProjects 
            style = {{ background: "#fff" }} 
            exit = "exit" 
            variants = { pageAnimation } 
            initial = "hidden" 
            animate = "show" 
        >
            <motion.div variants = { sliderContainer }> 
                <Frame1 variants = { slider }> </Frame1>
                <Frame2 variants = { slider }> </Frame2>
                <Frame3 variants = { slider }> </Frame3>
                <Frame4 variants = { slider }> </Frame4>
            </motion.div>

            <StyledProject>
                <motion.h2 variants = { fade }>Currency Exchange</motion.h2>
                <motion.div variants = { lineAnim } className="line"></motion.div>
                <Link to = "/projects/currency-exchange">
                    <Hide> 
                        <motion.img variants = { photoAnim } src={CE} alt="Screenshot of Currency Exchange home page"/>
                    </Hide>
                </Link>
            </StyledProject>
            
            <StyledProject ref = {element} variants = { swoopAdoop } animate = {controls} initial = "hidden" >
                <h2>Music Application</h2>
                <motion.div variants = { lineAnim } className="line"></motion.div>
                <Link to = "/projects/music-application">
                    <img src={MA} alt="Screenshot of Music Application home page"/>
                </Link>
            </StyledProject>

            <StyledProject ref = {element2} variants = { swoopAdoop } animate = {controls2} initial = "hidden">
                <h2>Douglas Fir</h2>
                <motion.div variants = { lineAnim } className="line"></motion.div>
                <Link to = "/projects/douglas-fir">
                    <img src={DF} alt="Screenshot of Douglas Fir home page"/>
                </Link>
            </StyledProject>

        </StyledProjects>
    )
}

const StyledProjects = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const StyledProject = styled(motion.div)`
    padding-bottom: 10rem;
    //overflow: hidden;
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div `
    overflow: hidden;
`;


//Frame Animation
const Frame1 = styled(motion.div) `
    position: fixed;
    left: 0;
    top: 10;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1) `
    background: #ff8efb;
`;

const Frame3 = styled(Frame1) `
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1) `
    background: #8effa0;
`;

export default Projects; 