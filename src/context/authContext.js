import React from 'react';

const AuthContext = React.createContext({
    user: JSON.parse(window.localStorage.getItem('token-data')),
    login: () => {
    },
    logout: () => {
    },
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;