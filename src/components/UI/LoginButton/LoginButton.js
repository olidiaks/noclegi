import {useLocation, useNavigate} from "react-router-dom";

export function LoginButton(props) {
    const path = useLocation().pathname;
    const navigate = useNavigate();
    return (
        <button
            type="button"
            onClick={() => navigate('/zaloguj', {state: {path: path}})}
            className="mt-2 btn btn-primary"
        >
            {props.children}
        </button>
    )
}