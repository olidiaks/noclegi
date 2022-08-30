import {Navigate} from "react-router-dom";

export function redirectHandler(path, replace = true) {
    switch (path) {
        case "/Dom":
            return <Navigate to="/" replace={replace}/>;
            break;
        default:
            return <Navigate to={path} replace={replace}/>;
    }
}