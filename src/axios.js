import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_DATABASE,
});


export const authenticationInstance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    params: {
        key: process.env.REACT_APP_AUTHENTICATION_KEY,
    }
})

export default instance;
