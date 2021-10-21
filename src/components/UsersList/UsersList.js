import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Loader from '../Loader/Loader';
import styled from 'styled-components';
import UserItem from '../UserItem/UserItem';
import Pagination from '../Pagination/Pagination';
import { AppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';

const UsersList = () => {
    const { isLoading, users } = useContext(AppContext);

    const animations = {
        hidden: { y: -250, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5,
                type: 'spring',
                stiffness: 110,
            },
        },
    };

    const isLoadingUsersList = isLoading ? (
        <Loader />
    ) : (
        <>
            <motion.div variants={animations} initial='hidden' animate='show'>
                <Pagination />
                <List>
                    {users.map(user => (
                        <UserItem user={user} key={user.id} />
                    ))}
                </List>
            </motion.div>
        </>
    );

    return (
        <motion.main
            className='main'
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
        >
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={12}>{isLoadingUsersList}</Col>
                    </Row>
                </Container>
            </Container>
        </motion.main>
    );
};

const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding-left: 0;
    margin-top: 4rem;
`;

export default UsersList;
