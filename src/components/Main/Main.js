import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Main = () => {
    const state = {
        name: 'Krzysztof',
        created: '2017-12-01 Mon 31 12:00pm',
        species: 'Human',
        type: 'Unknown',
        gender: 'Male',
        image: 'https://loremflickr.com/320/240',
    };

    return (
        <main className='main'>
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <ul style={{ display: 'flex', listStyle: 'none' }}>
                                <li>
                                    <Card>
                                        <Card.Img variant='top' src={state.image} />
                                        <Card.Body>
                                            <Card.Title>{state.name}</Card.Title>
                                            <ul>
                                                <li>
                                                    <b>status:</b> {state.status}
                                                </li>
                                                <li>
                                                    <b>species:</b> {state.species}
                                                </li>
                                                <li>
                                                    <b>type:</b> {state.type}
                                                </li>
                                                <li>
                                                    <b>gender:</b> {state.gender}
                                                </li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className='text-muted'>Created: {state.created}</small>
                                        </Card.Footer>
                                    </Card>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </main>
    );
};

export default Main;
