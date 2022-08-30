import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";
import {useEffect, useState} from "react";
import isEmail from "validator/es/lib/isEmail";
import isStrongPassword from "validator/es/lib/isStrongPassword";
import useAuth from "../../../hooks/useAuth";
import {authenticationInstance} from "../../../axios";
import {firebaseErrorsHandler} from "../../../hooks/Firebase/firebaseErrorsHandler";

const ProfileDetails = () => {
    const [errors, setErrors] = useState({
        email: true,
        password: false,
    });

    const [changeDateSuccess, setChangeDateSuccess] = useState(false);
    const [changeDateErrors, setChangeDateErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [auth, setAuth] = useAuth();
    const submit = async e => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = (await authenticationInstance.post('accounts:update', {
                idToken: auth.token,
                email: email,
                password: password,
                returnSecureToken: true,
            })).data;
            setAuth({
                email: data.email,
                token: data.idToken,
                userId: data.localId,
            });
            setChangeDateErrors(null);
            setChangeDateSuccess(true);
            setTimeout(() => setChangeDateSuccess(false), 3000);
        } catch (e) {
            setChangeDateErrors(firebaseErrorsHandler(e.response));
        }
        setLoading(false);
    };

    const [email, setEmail] = useState(auth.email);
    useEffect(() => {
        setErrors({...errors, email: isEmail(email)});
    }, [email]);

    const [password, setPassword] = useState('');
    useEffect(() => {
        setErrors({...errors, "password": isStrongPassword(password)});
    }, [password]);

    const buttonDisabled = !errors.email || !errors.password

    return (
        <div>
            {changeDateSuccess ? <div className="alert alert-success">
                Zmiana danych logowania zakończyła się sukcesem.
            </div> : null}
            {changeDateErrors ? <div className="alert alert-danger">{changeDateErrors}</div> : null}
            <h2>Logowanie:</h2>

            <form onSubmit={submit}>
                <div className="row">
                    <div className="input-group col-12 col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={`form-control ${errors.email ? 'is-valid' : 'is-invalid'}`}
                            autoComplete="new-email"
                        />
                        <div className="invalid-feedback">
                            Niepoprawny email.
                        </div>
                        <div className="valid-feedback">
                            Wszystko gra!
                        </div>
                    </div>


                    <div className="col-12 col-md-6 input-group">
                        <label htmlFor="password" className="form-label">Hasło</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={`form-control ${errors.password ? 'is-valid' : 'is-invalid'}`}
                            autoComplete="new-password"
                        />
                        <div className="invalid-feedback">
                            <ul className="text-danger">
                                <li> Minimum 8 znaków</li>
                                <li>Conajmniej jedna mała litera</li>
                                <li>Conajmniej jedna duża litera</li>
                                <li>Conajmniej jedna cyfra</li>
                                <li>Conajmniej jeden znak specjalny
                                </li>
                            </ul>
                        </div>
                        <div className="valid-feedback">
                            Wszystko gra!
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <LoadingButton disabled={buttonDisabled}
                                   loading={loading}
                                   label="Zapisz się"
                                   loadingLabel="Sprawdzanie poprawności danych."
                    />
                </div>
            </form>
        </div>
    );
};

export default ProfileDetails;