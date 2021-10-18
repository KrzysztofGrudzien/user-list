import FilterBar from '../FilterBar/FilterBar';
import UsersList from '../UsersList/UsersList';
import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    state = {
        users: [],
        isLoading: false,
        pages: null,
        filter: 'all',
    };

    async componentDidMount() {
        this.setState({ isLoading: true });
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        setTimeout(() => {
            this.setState({ users: response.data.results, isLoading: false, pages: response.data.info.pages });
        }, 2000);
    }

    filterUser = async filter => {
        this.setState({ isLoading: true });
        if (filter === 'all') {
            this.setState({ isLoading: true });
            const response = await axios.get('https://rickandmortyapi.com/api/character/');
            setTimeout(() => {
                this.setState({ users: response.data.results, isLoading: false, pages: response.data.info.pages });
            }, 2000);
        } else {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?gender=${filter}`);
            setTimeout(() => {
                this.setState({
                    users: response.data.results,
                    isLoading: false,
                    pages: response.data.info.pages,
                    filter,
                });
            }, 2000);
        }
    };

    filterPerPage = async pages => {
        if (this.state.filter === 'all') {
            this.setState({ isLoading: true });
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pages}`);
            setTimeout(() => {
                this.setState({ users: response.data.results, isLoading: false, pages: response.data.info.pages });
            }, 2000);
        } else {
            this.setState({ isLoading: true });
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character/?page=${pages}&gender=${this.state.filter}`,
            );
            setTimeout(() => {
                this.setState({ users: response.data.results, isLoading: false, pages: response.data.info.pages });
            }, 2000);
        }
    };

    render() {
        return (
            <div className='App'>
                <FilterBar filterUser={this.filterUser} />
                <UsersList
                    isLoading={this.state.isLoading}
                    users={this.state.users}
                    pages={this.state.pages}
                    filterPerPage={this.filterPerPage}
                    filter={this.state.filter}
                />
            </div>
        );
    }
}

export default App;
