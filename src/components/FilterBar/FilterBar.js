import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFilterRight } from 'react-icons/bs';

class FilterBar extends Component {
    state = {
        filter: '',
    };

    handleSubmitForm = e => {
        e.preventDefault();
        this.props.filterUser(this.state.filter);
    };

    handleFilterGender = e => {
        this.setState({ filter: e.target.value });
    };

    render() {
        return (
            <Container fluid style={styleContainer}>
                <Container>
                    <Form onSubmit={this.handleSubmitForm}>
                        <Row>
                            <Col sm={10}>
                                <Form.Select aria-label='Floating label select' onChange={this.handleFilterGender}>
                                    <option value='all'>Filter by gender</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='genderless'>Genderless</option>
                                    <option value='unknown'>Unknown</option>
                                    <option value='all'>All genders</option>
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
    }
}

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

export default FilterBar;
