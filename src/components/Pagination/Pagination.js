import Pagination from 'react-bootstrap/Pagination';
import styled from 'styled-components';

const PaginationBasic = ({ filterPerPage, pages }) => {
    let items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item key={number} onClick={() => filterPerPage(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return <PaginationList>{items}</PaginationList>;
};

const PaginationList = styled(Pagination)`
    justify-content: flex-end;
    margin-bottom: -3rem;
    margin-top: 2rem;
`;

export default PaginationBasic;
