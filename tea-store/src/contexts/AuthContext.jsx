import { createContext, useState, useEffect } from "react";

const BASE_URL = 'http://localhost:3030';


export const AuthContext = createContext({
    _id: "",
    username: "",
    email: "",
    tel: "",
    accessToken: "",
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null
});


export function AuthContextProvider(props) {

    const [authState, setAuthState] = useState({});
    console.log(authState)

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
            username: state.username,
            email: state.email,
            tel: state.tel,
            accessToken: state.accessToken,
            isAuthenticated: !!state.email,
        });
    };

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'accessToken') {
                if (e.newValue === null) {
                    setAuthState({});
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

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
                username: data.username,
                email: data.email,
                tel: data.tel,
                accessToken: token,
                isAuthenticated: true,
            });
        } catch (error) {
            console.error('Token verification failed', error);
            setAuthState({
                _id: "",
                username: "",
                email: "",
                tel: "",
                accessToken: "",
                isAuthenticated: false,
            });
        }
    };


    const contextData = {
        _id: authState._id,
        username: authState.username,
        email: authState.email,
        tel: authState.tel,
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

