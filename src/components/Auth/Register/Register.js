import Input from "../../Inputs/Input";
import LoadingButton from "../../UI/LoadingButton/LoadingButton";
import {useContext, useEffect, useState} from "react";
import {Validation} from "../../../helpers/Validation/Validation";
import ThemeContext from "../../../context/themeContext";

export default function Register() {
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
    const [successRegister, setSuccessRegister] = useState(false);

    const submit = event => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccessRegister(true);
            setTimeout(() => setSuccessRegister(false), 3000);
        }, 500);
    }

    const onChangeHandler = (value, state, setState) => {
        setState({
                ...state,
                value: value,
                showError: true,
                ...Validation(state.rules, value),
            }
        );
    };

    const [isEverythingValid, setIsEverythingValid] = useState(false);

    const checkValidationForAllInputs = () => {
        const variables = [email, password];

        for (const variable of variables) {
            if (variable instanceof Object) {
                if (!variable.showError || !variable.isValid) {
                    setIsEverythingValid(false);
                    return null;
                }
            }
        }
        setIsEverythingValid(true);
    }

    useEffect(() => {
        checkValidationForAllInputs();
    }, [email, password]);

    return (<>
            {successRegister ? <div className="alert alert-success">
                <p>Pomyślnie dodano nowy hotel.</p>
            </div> : null}
            <div className="card">
                <div className="card-header">
                    Rejestracja
                </div>
                <div className="card-body">
                    <form onSubmit={submit}>

                        <Input
                            description="Email"
                            value={email.value}
                            onChange={value => onChangeHandler(value, email, setEmail)}
                            type="text"
                            isValid={email.isValid}
                            showError={email.showError}
                            invalidFeedback={email.error}
                        />

                        <Input
                            description="Hasło"
                            value={password.value}
                            onChange={value => onChangeHandler(value, password, setPassword)}
                            type="password"
                            isValid={password.isValid}
                            showError={password.showError}
                            invalidFeedback={password.error}
                        />

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
}