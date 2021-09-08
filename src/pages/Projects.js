import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Images

import african from '../images/african.png'; 
import job from '../images/job-seeker.png'; 
import github from '../images/github.png'; 
import currency from '../images/currency.png'; 
import lion from '../images/lion.png'; 
import music from '../images/music.png'; 
import shopping from '../images/online-shopping.png'; 
import pizza from '../images/pizza.png'; 
import studio from '../images/studio.png'; 
import quotes from '../images/quotes.png'; 

//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animation';
import { fade, photoAnim, lineAnim } from '../animation';
//import { useScroll } from '../components/useScroll';



const Projects = () => {

    // const [element, controls] = useScroll();
    // const [element2, controls2] = useScroll();

    return(
        <StyledProjects 
            //style = {{ background: "#fff" }} 
            exit = "exit" 
            variants = { pageAnimation } 
            initial = "hidden" 
            animate = "show" 
        >
            {/* <motion.div variants = { sliderContainer }> 
                <Frame1 variants = { slider }> </Frame1>
                <Frame2 variants = { slider }> </Frame2>
                <Frame3 variants = { slider }> </Frame3>
                <Frame4 variants = { slider }> </Frame4>
            </motion.div> */}
            

                <StyledProject>
                    
                    <motion.h2 variants = { fade }>Currency Exchange</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/currency-exchange">
                        <Hide> 
                            <motion.img variants = { photoAnim } src={currency} alt="Screenshot of Currency Exchange home page"/>
                        </Hide>
                    </Link>
                </StyledProject>
                
                <StyledProject >
                    <motion.h2 variants = { fade }>Music Application</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/music-application">
                        <motion.img variants = { photoAnim } src={music} alt="Screenshot of Music Application home page"/>
                    </Link>
                </StyledProject>

                <StyledProject >
                    <motion.h2 variants = { fade }>Douglas Fir</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/douglas-fir">
                        <motion.img variants = { photoAnim } src={lion} alt="Screenshot of Douglas Fir home page"/>
                    </Link>
                </StyledProject>

                <StyledProject>
                    <motion.h2 variants = { fade }>Quotes Application</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/quotes-app">
                        <Hide> 
                            <motion.img variants = { photoAnim } src={quotes} alt="Screenshot of Currency Exchange home page"/>
                        </Hide>
                    </Link>
                </StyledProject>
                
                <StyledProject >
                    <motion.h2 variants = { fade }>Pizza Place</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/pizza-place">
                        <motion.img variants = { photoAnim } src={pizza} alt="Screenshot of Music Application home page"/>
                    </Link>
                </StyledProject>

                <StyledProject >
                    <motion.h2 variants = { fade }>Github Search</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/github-search">
                        <motion.img variants = { photoAnim } src={github} alt="Screenshot of Douglas Fir home page"/>
                    </Link>
                </StyledProject>

                <StyledProject>
                    <motion.h2 variants = { fade }>Akan Names</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/akan-names">
                        <Hide> 
                            <motion.img variants = { photoAnim } src={african} alt="Screenshot of Currency Exchange home page"/>
                        </Hide>
                    </Link>
                </StyledProject>
                
                <StyledProject >
                    <motion.h2 variants = { fade }>Delani Studio</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/delani-studio">
                        <motion.img variants = { photoAnim } src={studio} alt="Screenshot of Music Application home page"/>
                    </Link>
                </StyledProject>

                <StyledProject>
                    <motion.h2 variants = { fade }>Job Search</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/job-search">
                        <motion.img variants = { photoAnim } src={job} alt="Screenshot of Douglas Fir home page"/>
                    </Link>
                </StyledProject>

                <StyledProject>
                    <motion.h2 variants = { fade }>Shopping App</motion.h2>
                    <motion.div variants = { lineAnim } className="line"></motion.div>
                    <Link to = "/projects/shopping-app">
                        <Hide> 
                            <motion.img variants = { photoAnim } src={shopping} alt="Screenshot of Currency Exchange home page"/>
                        </Hide>
                    </Link>
                </StyledProject>

        </StyledProjects>
    )
}

const StyledProjects = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    h2 {
        padding: 1rem 0rem;
        font-size: 2rem;
    }
    @media (max-width: 1300px){
        padding: 2rem 2rem;        
    }
`;

const StyledProject = styled(motion.div)`
    padding-bottom: 10rem;
    flex: 1;
    flex-basis: 30rem;
    //overflow: hidden;
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 70%;
        height: 50%;
        object-fit: cover;
    }
    h2 {
        color: white;
    }
`;

const Hide = styled.div `
    overflow: hidden;
`;


//Frame Animation
// const Frame1 = styled(motion.div) `
//     position: fixed;
//     left: 0;
//     top: 10;
//     width: 100%;
//     height: 100vh;
//     background: #fffebf;
//     z-index: 2;
// `;

// const Frame2 = styled(Frame1) `
//     background: #ff8efb;
// `;

// const Frame3 = styled(Frame1) `
//     background: #8ed2ff;
// `;

// const Frame4 = styled(Frame1) `
//     background: #8effa0;
// `;

export default Projects; 