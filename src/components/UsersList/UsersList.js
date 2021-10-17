import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Loader from '../Loader/Loader';
import styled from 'styled-components';

const UsersList = ({ isLoading, users }) => {
    return (
        <main className='main'>
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={12}>
                            {isLoading ? (
                                <Loader />
                            ) : (
                                <List>
                                    {users.map(user => (
                                        <li>
                                            <Card>
                                                <Card.Img variant='top' src={user.image} alt='' />
                                                <Card.Body>
                                                    <Card.Title>{user.name}</Card.Title>
                                                    <ul style={{ listStyle: 'none' }}>
                                                        <li>
                                                            <b>status:</b> {user.status}
                                                        </li>
                                                        <li>
                                                            <b>species:</b> {user.species}
                                                        </li>
                                                        <li>
                                                            <b>type:</b> {user.type}
                                                        </li>
                                                        <li>
                                                            <b>gender:</b> {user.gender}
                                                        </li>
                                                    </ul>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <small className='text-muted'>Created: {user.created}</small>
                                                </Card.Footer>
                                            </Card>
                                        </li>
                                    ))}
                                </List>
                            )}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </main>
    );
};

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    list-style: none;
    padding-left: 0;
`;

export default UsersList;
