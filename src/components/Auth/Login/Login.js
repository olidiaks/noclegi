import {useLocation, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import AuthContext from "../../../context/authContext";
import LoadingButton from "../../UI/LoadingButton/LoadingButton";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validator = () => true;

    const {login} = useContext(AuthContext);
    const path = useLocation().state.path;
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const loginHandler = () => {
        login();
        console.log(path);
        switch (path) {
            case "Dom":
                navigate("/");
                break;
            default:
                navigate(`${path}`);
        }
    }

    const [valid, setValid] = useState(null);
    const errorHandler = () => {
        setValid(false);
        setPassword('');
    };

    const submit = e => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            validator(e) ? loginHandler() : errorHandler();
            setLoading(false);
        }, 500);

    }

    return (
        <div>
            <h2>Logowanie:</h2>

            {valid === false ? <div className="alert alert-danger">
                Niepoprawne dane logowania
            </div> : null}

            <form onSubmit={submit}>
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