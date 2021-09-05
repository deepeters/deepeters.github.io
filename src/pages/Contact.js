import React from 'react';

//Animations
import {motion} from "framer-motion";
import { pageAnimation, titleAnim } from '../animation';

import styled from 'styled-components';

const Contact = () => {
    return(
        <styledContact 
            exit= "exit"
            variants = { pageAnimation } 
            initial = "hidden" 
            animate = "show" 
            style = {{ background: "#fff" }}
            >
            <styledTitle>
                <Hide>
                    <motion.h2 variants = { titleAnim }> Get in touch. </motion.h2>
                </Hide>
                <div>
                    <Hide>
                        <Social variants = { titleAnim }>
                            <Circle />
                            <h2> Send me a Message </h2>
                        </Social>
                   </Hide>
                   <Hide>
                        <Social variants = { titleAnim }>
                            <Circle />
                            <h2> Send me a Message </h2>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants = { titleAnim }>
                            <Circle />
                            <h2> Send me a Message </h2>
                        </Social>
                    </Hide>
                </div>
            </styledTitle>
        </styledContact>
    )
}

const styledContact = styled(motion.div) `
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 1300px){
      padding: 2rem;
      font-style: 1rem;
    }
`;

const styledTitle = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 1300px){
        margin-top: 5rem;        
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`

export default Contact; 