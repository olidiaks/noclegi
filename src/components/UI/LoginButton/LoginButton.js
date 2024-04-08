import { useContext } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ThemeContext from "../../../context/themeContext";

export function LoginButton(props) {
    const theme = useContext(ThemeContext).color;
    const path = useLocation().pathname;
    const navigate = useNavigate();
    return (
        <button
            type="button"
            onClick={() => navigate('/zaloguj', {state: {path: path}})}
            className={`mt-2 btn btn-${theme}`}
        >
            {props.children}
        </button>
    )
}
