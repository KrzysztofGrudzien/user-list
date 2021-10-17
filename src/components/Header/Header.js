import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFilterRight } from 'react-icons/bs';

const Header = () => {
    const styleContainer = {
        backgroundColor: '#f8f9fa',
        padding: '1rem 0',
    };

    const styleButton = {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '4rem',
        width: '100%',
    };

    const styleIcon = {
        marginRight: '1rem',
    };

    return (
        <Container fluid style={styleContainer}>
            <Container>
                <Form>
                    <Row>
                        <Col sm={10}>
                            <Form.Select aria-label='Floating label select'>
                                <option>Filter by gender</option>
                                <option value='female'>Female</option>
                                <option value='male'>Male</option>
                                <option value='genderless'>Genderless</option>
                                <option value='unknown'>Unknown</option>
                            </Form.Select>
                        </Col>
                        <Col sm={2}>
                            <Button variant='primary' size='md' style={styleButton} type='submit'>
                                <BsFilterRight style={styleIcon} />
                                Filter list
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    );
};

export default Header;
