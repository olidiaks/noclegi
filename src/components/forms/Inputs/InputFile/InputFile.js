import PropTypes from "prop-types";
import {useRef} from "react";

const propTypes = {
    description: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

const defaultProps = {
    isValid: false,
    showError: false,
};

const InputFile = props => {
    const ref = useRef()
    return <div className="form-group">
        <label className="form-label"><h3 className="fw-bold">{props.description}</h3></label><br/>
        <input type="file" ref={ref} onChange={event => props.onChange(event.target.files)}/>
    </div>;
};

InputFile.defaultProps = defaultProps;
InputFile.propTypes = propTypes;

export default InputFile;