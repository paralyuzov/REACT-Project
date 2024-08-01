import { useContext } from "react";
import { login, register } from "../api/auth"
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {

    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        changeAuthState(result);
        console.log(result);
        return result
    }

    return loginHandler
}

export const useRegister = () => {

    const { changeAuthState } = useContext(AuthContext);

    const registerHandler = async (username, email, password, tel) => {
        const result = await register(username, email, password, tel);
        changeAuthState(result);
        console.log(result);
        return result
    }

    return registerHandler
}