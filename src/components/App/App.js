import FilterBar from '../FilterBar/FilterBar';
import UsersList from '../UsersList/UsersList';
import Footer from '../Footer/Footer';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { AppContext, defaultObject } from '../../context/AppContext';

const App = () => {
    const [users, setUsers] = useState(defaultObject.users);
    const [isLoading, setIsLoading] = useState(defaultObject.isLoading);
    const [pages, setPages] = useState(defaultObject.pages);
    const [filterGender, setFilterGender] = useState(defaultObject.filter);
    const { filter } = useContext(AppContext);

    const fetchData = async link => {
        setIsLoading(!isLoading);
        const response = await link;
        setUsers(response.data.results);
        setPages(response.data.info.pages);
        setIsLoading(isLoading);
    };

    useEffect(async () => {
        fetchData(await axios.get('https://rickandmortyapi.com/api/character/'));
    }, []);

    const filterUsers = async filter => {
        setIsLoading(!isLoading);
        setFilterGender(filter);
        if (filter === 'all') {
            fetchData(await axios.get('https://rickandmortyapi.com/api/character/'));
        } else {
            fetchData(await axios.get(`https://rickandmortyapi.com/api/character/?gender=${filter}`));
        }
    };

    const filterPerPage = async pages => {
        if (filterGender === 'all') {
            fetchData(await axios.get(`https://rickandmortyapi.com/api/character/?page=${pages}`));
        } else {
            fetchData(
                await axios.get(`https://rickandmortyapi.com/api/character/?page=${pages}&gender=${filterGender}`),
            );
        }
    };

    return (
        <AppContext.Provider value={{ isLoading, filter, filterUsers, pages, filterPerPage, users }}>
            <div className='App'>
                <FilterBar />
                <UsersList />
                <Footer />
            </div>
        </AppContext.Provider>
    );
};

export default App;
