import Input from "../../forms/Inputs/Input";
import LoadingButton from "../../UI/LoadingButton/LoadingButton";
import {useContext, useEffect, useState} from "react";
import ThemeContext from "../../../context/themeContext";
import {checkValidationForTrackedInputs} from "../../forms/Inputs/InputHelpers/checkValidationForTrackedInputs";
import {inputChangeHandler} from "../../forms/Inputs/InputHelpers/inputChangeHandler";
import useAuth from "../../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {submit} from "../helpers/submit";
import {firebaseErrorsHandler} from "../../../hooks/Firebase/firebaseErrorsHandler";
import authContext from "../../../context/authContext";
import useWebsiteTitle from "../../../hooks/useWebsiteTitle";

export default function Register() {
    useWebsiteTitle("Rejestracja | Noclegi");

    const theme = useContext(ThemeContext).color;

    const [email, setEmail] = useState({
        value: '',
        error: '',
        showError: false,
        rules: ['required', 'email'],
    });

    const [password, setPassword] = useState({
        value: '',
        error: '',
        showError: false,
        rules: ['required', {rule: "min", length: 8}],
    });

    const [loading, setLoading] = useState(false);
    const [successRegister, setSuccess] = useState(false);

    const [isEverythingValid, setIsEverythingValid] = useState(false);
    const inputsToValidate = [email, password];
    useEffect(() => {
        setIsEverythingValid(checkValidationForTrackedInputs(inputsToValidate));
    }, inputsToValidate);

    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (auth) {
            navigate('/', {replace: true});
        }
    }, [auth]);

    const errorHandler = response => setError(firebaseErrorsHandler(response));

    const {login} = useContext(authContext);

    const submitHandler = event =>
        submit(event, setLoading, email.value, password.value, '/', navigate, errorHandler, login, 'accounts:signUp');

    const [error, setError] = useState('');

    return (<>
            {successRegister ? <div className="alert alert-success">
                <p>Pomyślnie dodano nowy hotel.</p>
            </div> : null}
            <div className="card">
                <div className="card-header">
                    Rejestracja
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>

                        <Input
                            description="Email"
                            value={email.value}
                            onChange={value => inputChangeHandler(value, email, setEmail)}
                            type="text"
                            isValid={email.isValid}
                            showError={email.showError}
                            invalidFeedback={email.error}
                        />

                        <Input
                            description="Hasło"
                            value={password.value}
                            onChange={value => inputChangeHandler(value, password, setPassword)}
                            type="password"
                            isValid={password.isValid}
                            showError={password.showError}
                            invalidFeedback={password.error}
                        />

                        {error ? <div className="alert alert-danger">{error}</div> : null}

                        <LoadingButton
                            loading={loading}
                            label="Zarejestruj."
                            loadingLabel="Rejestrowanie."
                            className={`btn-${theme}`}
                            disabled={!isEverythingValid}
                        />
                    </form>
                </div>
            </div>
        </>
    );
};