import PropTypes from "prop-types";
import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";
import authContext from "../../context/authContext";

const propTypes = {
    path: PropTypes.string.isRequired,
}
const AuthenticatedRoute = props =>
    useContext(authContext).isAuthenticated ?
        <Outlet/> :
        <Navigate to="/zaloguj" replace={true} state={{path: props.path}}/>;

AuthenticatedRoute.propType = propTypes;

export default AuthenticatedRoute;