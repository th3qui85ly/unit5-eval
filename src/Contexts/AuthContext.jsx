import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = React.useState(false);
    const [token, setAuthToken] = React.useState("");
    const navigate = useNavigate();

    const login = (token) => {
        setIsAuth(true);
        setAuthToken(token);
        navigate(`/`);
    };

    const logout = () => {
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{isAuth, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
