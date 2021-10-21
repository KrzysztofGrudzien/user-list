import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Loader from '../Loader/Loader';
import styled from 'styled-components';
import UserItem from '../UserItem/UserItem';
import Pagination from '../Pagination/Pagination';
import { AppContext } from '../../context/AppContext';

const UsersList = () => {
    const { isLoading, users } = useContext(AppContext);

    const isLoadingUsersList = isLoading ? (
        <Loader />
    ) : (
        <>
            <Pagination />
            <List>
                {users.map(user => (
                    <UserItem user={user} key={user.id} />
                ))}
            </List>
        </>
    );

    return (
        <main className='main'>
            <Container fluid>
                <Container>
                    <Row>
                        <Col lg={12}>{isLoadingUsersList}</Col>
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
    padding-left: 0;
    margin-top: 4rem;
`;

export default UsersList;
