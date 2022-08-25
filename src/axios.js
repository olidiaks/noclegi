import axios from "axios";

const instance = axios.create({
    baseURL: 'https://kurs-react-9a6f2-default-rtdb.firebaseio.com'
});

export const authenticationInstance = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAiyIunKuby59uyS9k2Q3vlUFHLNYDeqfQ"
})

export default instance;