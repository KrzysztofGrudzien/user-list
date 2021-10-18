import Pagination from 'react-bootstrap/Pagination';
import styled from 'styled-components';
import React, { Component } from 'react';

class PaginationBasic extends Component {
    render() {
        let items = [];
        for (let number = 1; number <= this.props.pages; number++) {
            items.push(
                <Pagination.Item key={number} onClick={() => this.props.filterPerPage(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
        return <PaginationList>{items}</PaginationList>;
    }
}

const PaginationList = styled(Pagination)`
    justify-content: flex-end;
    margin-bottom: -3rem;
    margin-top: 2rem;
`;

export default PaginationBasic;
