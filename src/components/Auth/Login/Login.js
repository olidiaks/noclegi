import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import AuthContext from "../../../context/authContext";
import LoadingButton from "../../UI/LoadingButton/LoadingButton";
import {firebaseErrorsHandler} from "../../../hooks/Firebase/firebaseErrorsHandler";
import {submit} from "../helpers/submit";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

const Login = () => {
    useWebsiteTitle("Logowanie | Noclegi");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {login} = useContext(AuthContext);
    const path = useLocation().state.path ?? "/";
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const [valid, setValid] = useState(null);
    const [error, setError] = useState('');
    const errorHandler = (response) => {
        setValid(false);
        setPassword('');
        setError(firebaseErrorsHandler(response));
    };

    const submitHandler = e =>
        submit(e, setLoading, email, password, path == "/zaloguj" ? "/" : path, navigate, errorHandler, login, 'accounts:signInWithPassword');

    return (
        <div>
            <h2>Logowanie:</h2>

            {valid === false ? <div className="alert alert-danger">
                {error}
            </div> : null}

            <form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="form-control"
                            autoComplete="new-email"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="password" className="form-label">Hasło</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="form-control"
                            autoComplete="new-password"
                        />
                    </div>
                </div>
                <div className="col-12">
                    <LoadingButton
                        loading={loading}
                        label="Zaloguj się"
                        loadingLabel="Sprawdzanie poprawności danych."
                    />
                </div>
            </form>
        </div>
    );
};


export default Login;