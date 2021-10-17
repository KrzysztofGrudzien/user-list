import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFilterRight } from 'react-icons/bs';

const FilterBar = () => {
    const styleContainer = {
        backgroundColor: '#f8f9fa',
        padding: '1rem 0',
    };

    const styleButton = {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
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
                                <option>Select one option of the list</option>
                                <option value='name'>Name</option>
                                <option value='status'>Status</option>
                                <option value='species'>Species</option>
                                <option value='type'>Type</option>
                                <option value='gender'>Gender</option>
                                <option value='image'>Image</option>
                                <option value='created'>Created</option>
                            </Form.Select>
                        </Col>
                        <Col sm={2}>
                            <Button variant='primary' size='md' style={styleButton} type='submit'>
                                <BsFilterRight style={styleIcon} />
                                Filter your list
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    );
};

export default FilterBar;
