import { createContext } from 'react';

export const defaultObject = {
    filter: 'all',
    filterUsers: () => {},
    filterPerPage: () => {},
    isLoading: false,
    pages: null,
    users: [],
};

export const AppContext = createContext(defaultObject);
