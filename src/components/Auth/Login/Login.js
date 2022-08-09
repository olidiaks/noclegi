import {Navigate, useParams} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../../../context/authContext";

const Login = () => {
    const {login} = useContext(AuthContext);
    const {path} = useParams();
    return <div>
        <h2>Logowanie</h2>
        <form>
            <div className="row">
                <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
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
                        className="form-control"
                        autoComplete="new-password"
                    />
                </div>
            </div>
            <div className="col-12">
                <button onClick={() => {
                    login();
                    console.log('wykonano')
                    return <Navigate to={path}/>
                }} className="btn btn-primary w-100 mt-2">Zapisz
                </button>
            </div>
        </form>
    </div>;
};


export default Login;