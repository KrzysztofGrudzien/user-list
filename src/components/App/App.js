import Header from '../Header/Header';
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
        this.setState({ users: response.data.results, isLoading: false });
        console.log(response.data);
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <UsersList isLoading={this.state.isLoading} users={this.state.users} />
            </div>
        );
    }
}

export default App;
