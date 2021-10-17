import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const UserItem = ({ user }) => {
    return (
        <li>
            <Card>
                <Card.Img variant='top' src={user.image} alt='' />
                <Card.Body>
                    <CardTitle>{user.name}</CardTitle>
                    <List>
                        <ListItem>
                            <b>status:</b> {user.status}
                        </ListItem>
                        <ListItem>
                            <b>species:</b> {user.species}
                        </ListItem>
                        <ListItem>
                            <b>type:</b> {user.type}
                        </ListItem>
                        <ListItem>
                            <b>gender:</b> {user.gender}
                        </ListItem>
                    </List>
                </Card.Body>
                <Card.Footer>
                    <small className='text-muted'>Created: {user.created}</small>
                </Card.Footer>
            </Card>
        </li>
    );
};

const CardTitle = styled(Card.Title)`
    font-size: 1.8rem;
    font-weight: 700;
    font-family: 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
`;

const List = styled.ul`
    padding-left: 0;
    margin: 2rem 0;
`;

const ListItem = styled.li`
    padding: 0.2rem 0;
`;

export default UserItem;
