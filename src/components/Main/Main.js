import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Main = () => {
    return (
        <main className='main'>
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={2}>Sidebar</Col>
                        <Col lg={10}>Users list</Col>
                    </Row>
                </Container>
            </Container>
        </main>
    );
};

export default Main;
