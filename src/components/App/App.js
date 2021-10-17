import FilterBar from '../FilterBar/FilterBar';
import UsersList from '../UsersList/UsersList';
import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    state = {
        users: [],
        isLoading: false,
    };

    async componentDidMount() {
        this.setState({ isLoading: true });
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        setTimeout(() => {
            this.setState({ users: response.data.results, isLoading: false });
        }, 2000);
    }

    filterUser = async filter => {
        this.setState({ isLoading: true });
        if (filter === 'all') {
            this.setState({ isLoading: true });
            const response = await axios.get('https://rickandmortyapi.com/api/character/');
            setTimeout(() => {
                this.setState({ users: response.data.results, isLoading: false });
            }, 2000);
        } else {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?gender=${filter}`);
            setTimeout(() => {
                this.setState({ users: response.data.results, isLoading: false });
            }, 2000);
        }
    };

    render() {
        return (
            <div className='App'>
                <FilterBar filterUser={this.filterUser} />
                <UsersList isLoading={this.state.isLoading} users={this.state.users} />
            </div>
        );
    }
}

export default App;
