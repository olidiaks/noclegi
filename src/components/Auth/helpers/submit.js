import {authenticationInstance} from "../../../axios";
import {loginHandler} from "./loginHandler";

export async function submit(event, setLoading, email, password, path, navigate, errorHandler, login, isSingIn) {
    event.preventDefault();
    setLoading(true);

    try {
        const res = await authenticationInstance(isSingIn).post(null, {
            email: email,
            password: password,
            returnSecureToken: true,
        });
        loginHandler(res, path, navigate, login);
    } catch (ex) {
        errorHandler(ex.response);
        setLoading(false);
    }
}