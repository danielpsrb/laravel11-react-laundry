// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    return { token };
};
