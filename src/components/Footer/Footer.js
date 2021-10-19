import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillApi } from 'react-icons/ai';

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                Made in React.js by <strong>Krzysztof Grudzień</strong> as a recruiter task
            </p>
            <Nav>
                <a href='https://github.com/KrzysztofGrudzien/users-list' target='_blank'>
                    <AiFillGithub size='2rem' />
                </a>
                <a href='https://rickandmortyapi.com/documentation/' target='_blank'>
                    <AiFillApi size='2rem' />
                </a>
            </Nav>
        </FooterContainer>
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
