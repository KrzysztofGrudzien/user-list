import { createContext } from 'react';

export const defaultObject = {
    filter: 'all',
    filterUsers: () => {},
    filterPerPage: () => {},
    isLoading: false,
    pages: null,
    users: [],
    activePage: 1,
};

export const AppContext = createContext(defaultObject);
