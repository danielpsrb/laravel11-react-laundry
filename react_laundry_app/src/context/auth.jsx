import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext  = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('usersData');
        return storedUser ? JSON.parse(storedUser) : null;
    })

    useEffect(() => {
        if(user) {
            localStorage.setItem('usersData', JSON.stringify(user));
        } else {
            localStorage.removeItem('usersData');
        }
    }, [user]);

    const login = user => {
        setUser(user);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    )
}

export const authSession = () => {
    return useContext(AuthContext);
}