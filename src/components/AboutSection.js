import React from 'react';
import about from "../images/about.jpg";

//Styled Components
import styled from 'styled-components';

const AboutSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>Hello, I am Dennis</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2> a <span> software engineer </span> and </h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>an African literature enthuthiast</h2>
                    </StyledHide>
                </div>
                <p> Contact me for discussions and collaborations </p>
                <button>Contact</button>
            </StyledDescription>
            <StyledImage>
                <img src={ about } alt="Dennis is a portrait" />
            </StyledImage>
        </StyledAbout>
    )
}

//Styled Components

const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;

const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
`;

const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%auto;
        height: 80vh;
        object-fit: cover;

    }
`;

const StyledHide = styled.div`
    overflow: hidden;
`;

export default AboutSection;
