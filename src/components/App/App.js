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

    useEffect(() => {
        async function fetchData() {
            setIsLoading(!isLoading);
            const response = await axios.get('https://rickandmortyapi.com/api/character/');
            setTimeout(() => {
                setUsers(response.data.results);
                setPages(response.data.info.pages);
                setIsLoading(isLoading);
            }, 2000);
        }
        fetchData();
    }, []);

    const filterUsers = async filter => {
        setIsLoading(!isLoading);
        setFilterGender(filter);
        if (filter === 'all') {
            setIsLoading(!isLoading);
            const response = await axios.get('https://rickandmortyapi.com/api/character/');

            setTimeout(() => {
                setUsers(response.data.results);
                setPages(response.data.info.pages);
                setIsLoading(isLoading);
            }, 2000);
        } else {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?gender=${filter}`);
            setTimeout(() => {
                setUsers(response.data.results);
                setPages(response.data.info.pages);
                setIsLoading(isLoading);
            }, 2000);
        }
    };

    const filterPerPage = async pages => {
        if (filterGender === 'all') {
            setIsLoading(!isLoading);
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pages}`);
            setTimeout(() => {
                setUsers(response.data.results);
                setPages(response.data.info.pages);
                setIsLoading(isLoading);
            }, 2000);
        } else {
            setIsLoading(!isLoading);
            const response = await axios.get(
                `https://rickandmortyapi.com/api/character/?page=${pages}&gender=${filterGender}`,
            );

            setTimeout(() => {
                setUsers(response.data.results);
                setPages(response.data.info.pages);
                setIsLoading(isLoading);
            }, 2000);
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
