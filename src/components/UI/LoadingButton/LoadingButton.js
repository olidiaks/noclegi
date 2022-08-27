import PropTypes from "prop-types";
import {useContext} from "react";
import themeContext from "../../../context/themeContext";

const propTypes = {
    loading: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    loadingLabel: PropTypes.string.isRequired,
    className: PropTypes.string,

    disabled: PropTypes.bool,
}

const LoadingButton = props => {
    const theme = useContext(themeContext).color;

    return <button disabled={props.disabled} type="submit"
                   className={`btn ${props.className ?? `btn-${theme}`} w-100 mt-2`}>
        {props.loading ? <div className="spinner-border" role="status">
            <span className="visually-hidden">{props.loadingLabel}</span>
        </div> : props.label}
    </button>;
};

LoadingButton.propTypes = propTypes;

export default LoadingButton;