import {useContext, useDebugValue} from "react";
import AuthContext from "../context/authContext";

function useAuth() {
    const authContext = useContext(AuthContext);
    const auth = authContext.user;

    useDebugValue(auth ? 'Zalogowany' : 'Wylogowany')

    const setAuth = (user) => {
        if (user) {
            window.localStorage.setItem('token-data', JSON.stringify(user));
            authContext.login();
        } else {
            authContext.logout();
        }
    }
    return [auth, setAuth];
}

export default useAuth;