import Input from "../../forms/Inputs/Input";
import LoadingButton from "../../UI/LoadingButton/LoadingButton";
import {useContext, useEffect, useState} from "react";
import ThemeContext from "../../../context/themeContext";
import {checkValidationForTrackedInputs} from "../../forms/Inputs/InputHelpers/checkValidationForTrackedInputs";
import {inputChangeHandler} from "../../forms/Inputs/InputHelpers/inputChangeHandler";
import {onSubmitHandler} from "../../forms/formHelpes/onSubmitHandler";

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
    const [successRegister, setSuccess] = useState(false);

    const [isEverythingValid, setIsEverythingValid] = useState(false);

    const inputsToValidate = [email, password]
    useEffect(() => {
        setIsEverythingValid(checkValidationForTrackedInputs(inputsToValidate));
    }, inputsToValidate);

    return (<>
            {successRegister ? <div className="alert alert-success">
                <p>Pomyślnie dodano nowy hotel.</p>
            </div> : null}
            <div className="card">
                <div className="card-header">
                    Rejestracja
                </div>
                <div className="card-body">
                    <form onSubmit={event => onSubmitHandler(event, setLoading, setSuccess)}>

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