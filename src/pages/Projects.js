import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

//Images
import CE from '../images/CE.png';
import MA from '../images/MA.png';
import DF from '../images/DF.png'; 

const Projects = () => {
    return(
        <StyledProjects>
            <StyledProject>
                <h2>Currency Exchange</h2>
                <div className="line"></div>
                <Link>
                    <img src={CE} alt="Screenshot of Currency Exchange home page"/>
                </Link>
            </StyledProject>
            <StyledProject>
                <h2>Music Application</h2>
                <div className="line"></div>
                <Link>
                    <img src={MA} alt="Screenshot of Music Application home page"/>
                </Link>
            </StyledProject>
            <StyledProject>
                <h2>Douglas Fir</h2>
                <div className="line"></div>
                <Link>
                    <img src={DF} alt="Screenshot of Douglas Fir home page"/>
                </Link>
            </StyledProject>
        </StyledProjects>
    )
}

const StyledProjects = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
`;

const StyledProject = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default Projects; 