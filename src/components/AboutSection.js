import React from 'react';
import about from "../images/about.jpg";

//Styled Components
import styled from 'styled-components';
import {StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";

const AboutSection = () => {
    return(
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>Hello, I am Dennis</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2> a <span> Software Engineer </span> & </h2>
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



export default AboutSection;
