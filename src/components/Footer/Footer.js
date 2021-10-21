import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillApi } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Footer = () => {
    const animations = {
        hidden: { y: -250, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1,
                type: 'spring',
                stiffness: 110,
            },
        },
    };

    return (
        <motion.div variants={animations} initial='hidden' animate='show'>
            <FooterContainer>
                <p>
                    Made in React.js by <strong>Krzysztof Grudzień</strong> as a recruiter task
                </p>
                <Nav>
                    <a href='https://github.com/KrzysztofGrudzien/users-list' target='_blank' rel='noreferrer'>
                        <AiFillGithub size='2rem' />
                    </a>
                    <a href='https://rickandmortyapi.com/documentation/' target='_blank' rel='noreferrer'>
                        <AiFillApi size='2rem' />
                    </a>
                </Nav>
            </FooterContainer>
        </motion.div>
    );
};

const FooterContainer = styled(Container)`
    align-items: center;
    background-color: #f8f9fa;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0 1rem;

    p {
        margin: 1rem 0;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 5rem;
`;

export default Footer;
