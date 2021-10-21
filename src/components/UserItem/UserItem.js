import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const UserItem = ({ user }) => {
    const { status, species, type, gender, image, name, created } = user;
    const createdDate = `${created.slice(0, 10)} at ${created.slice(12, 19)}`;

    return (
        <li>
            <Card>
                <Card.Img variant='top' src={image} alt='image of species' />
                <Card.Body>
                    <CardTitle>{name}</CardTitle>
                    <List>
                        <ListItem>
                            <b>status:</b> {status}
                        </ListItem>
                        <ListItem>
                            <b>species:</b> {species}
                        </ListItem>
                        <ListItem>
                            <b>type:</b> {type}
                        </ListItem>
                        <ListItem>
                            <b>gender:</b> {gender}
                        </ListItem>
                    </List>
                </Card.Body>
                <Card.Footer>
                    <small className='text-muted'>Posted: {createdDate}</small>
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

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
