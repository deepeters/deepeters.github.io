import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ProjectState } from '../projectState';

//Animations
import {motion} from "framer-motion";
import { pageAnimation } from '../animation';


const ProjectDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [projects, setProjects] = useState(ProjectState);
    const [project, setProject ] = useState(null);

    //UseEffect
    useEffect(() => {
        const currentProject = projects.filter((stateProject) => stateProject.url === url);
        setProject(currentProject[0]);
    }, [projects, url]);

    return (
        <>
            {project && (
                <StyledDetail exit = "exit" variants = { pageAnimation } initial = "hidden" animate = "show" >
                    <StyledHeadLine>
                        <h2> {project.title} </h2>
                        <img src={project.mainImg} alt="project image"/>
                    </StyledHeadLine>
                    <StyledLinks>
                        {project.links.map((link) => (
                            <Link 
                                title={link.title} 
                                description={link.description} 
                                key={link.title}
                            />
                        ))}
                    </StyledLinks>
                    <StyledDescription>
                        <h3>Project Description</h3>
                        <div className="line"></div>
                        <p> {project.detailDescription} </p>
                    </StyledDescription>
                    <ImageDisplay>
                        <img src={project.secondaryImg} alt="second project image" />
                    </ImageDisplay>
                </StyledDetail>
            )}
        </>    
    );
}

const StyledDetail = styled(motion.div)`
    color: white;
`;
const StyledHeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const StyledDescription = styled.div `
    min-height: 80vh;
    margin: 5rem 10rem;
    align-items: center;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem; 
    }
`;
const StyledLinks = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const StyledLink = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

//Link Component
const Link = ({title, description}) => {
    return (
        <StyledLink>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledLink>
    )
}

export default ProjectDetail;