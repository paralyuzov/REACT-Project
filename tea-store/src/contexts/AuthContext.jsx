import { createContext, useState, useEffect } from "react";

const BASE_URL = 'http://localhost:3030';


export const AuthContext = createContext({
    _id: "",
    email: "",
    accessToken: "",
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});


export function AuthContextProvider(props) {

    const [authState, setAuthState] = useState({});

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        if (storedAccessToken) {
            verifyToken(storedAccessToken);
        }
    }, []);

    const changeAuthState = (state) => {
        if (state.accessToken) {
            localStorage.setItem('accessToken', state.accessToken);
        } else {
            localStorage.removeItem('accessToken');
        }
        setAuthState({
            _id: state._id,
            email: state.email,
            accessToken: state.accessToken,
            isAuthenticated: !!state.email,
        });
    };

    const verifyToken = async (token) => {
        try {
            const response = await fetch(`${BASE_URL}/api/auth/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });
            if (!response.ok) {
                throw new Error('Token verification failed');
            }
            const data = await response.json();
            setAuthState({
                _id: data.id,
                email: data.email,
                accessToken: token,
                isAuthenticated: true,
            });
        } catch (error) {
            console.error('Token verification failed', error);
            setAuthState({
                _id: "",
                email: "",
                accessToken: "",
                isAuthenticated: false,
            });
        }
    };


    const contextData = {
        _id: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: authState.isAuthenticated,
        changeAuthState
    }


    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

