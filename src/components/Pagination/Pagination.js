import Pagination from 'react-bootstrap/Pagination';
import styled from 'styled-components';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

const PaginationBasic = () => {
    const { pages, filterPerPage, filter, activePage } = useContext(AppContext);
    const [filterPage, setFilterPage] = useState(filter);
    const [nrPage, setNrPage] = useState(activePage);

    let items = [];
    for (let number = 1; number <= pages; number++) {
        items.push(
            <Pagination.Item
                key={number}
                onClick={() => {
                    setNrPage(number);
                    return filterPerPage(number, filterPage);
                }}
                style={{ margin: '0.2rem' }}
                active={number === nrPage}
            >
                {number}
            </Pagination.Item>,
        );
    }
    return <PaginationList>{items}</PaginationList>;
};

const PaginationList = styled(Pagination)`
    flex-wrap: wrap;
    justify-content: flex-end;
    margin-bottom: -3rem;
    margin-top: 2rem;
`;

export default PaginationBasic;
