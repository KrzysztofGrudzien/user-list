import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFilterRight } from 'react-icons/bs';
import styled from 'styled-components';
import { AppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

const FilterBar = () => {
    const { filterUsers } = useContext(AppContext);
    const [filterUser, setFilterUser] = useState('all');

    const animations = {
        hidden: { y: -250, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                type: 'spring',
                stiffness: 110,
            },
        },
    };

    const handleSubmitForm = e => {
        e.preventDefault();
        filterUsers(filterUser);
    };

    const handleFilterGender = e => {
        setFilterUser(e.target.value);
    };

    return (
        <motion.div variants={animations} initial='hidden' animate='show'>
            <Container fluid style={styleContainer}>
                <Container>
                    <Form onSubmit={handleSubmitForm}>
                        <Row>
                            <Col sm='12'>
                                <FormLabel>Filter by gender</FormLabel>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={9} md={8} sm={6} xs={12}>
                                <Form.Select
                                    aria-label='Floating label select'
                                    onChange={handleFilterGender}
                                    style={{ marginBottom: '1rem' }}
                                >
                                    <option value='all'>All genders</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='genderless'>Genderless</option>
                                    <option value='unknown'>Unknown</option>
                                </Form.Select>
                            </Col>
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <Button variant='primary' size='md' style={styleButton} type='submit'>
                                    <BsFilterRight style={styleIcon} />
                                    Filter your list
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </motion.div>
    );
};

const FormLabel = styled(Form.Label)`
    font-size: 0.8rem;
`;

const styleContainer = {
    backgroundColor: '#f8f9fa',
    padding: '1rem 0 2rem 0',
};

const styleButton = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
};

const styleIcon = {
    left: '1rem',
    position: 'absolute',
};

export default FilterBar;
