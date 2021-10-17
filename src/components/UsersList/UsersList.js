import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Loader from '../Loader/Loader';

const Main = ({ isLoading, users }) => {
    return (
        <main className='main'>
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={12}>
                            {isLoading ? (
                                <Loader />
                            ) : (
                                <ul
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                        gridGap: '1rem',
                                        listStyle: 'none',
                                    }}
                                >
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
                                </ul>
                            )}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </main>
    );
};

export default Main;
