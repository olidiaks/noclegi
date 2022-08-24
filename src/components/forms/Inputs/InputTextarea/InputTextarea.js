import PropTypes from "prop-types";

const propTypes = {
    description: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    showError: PropTypes.bool,
    isValid: PropTypes.bool,
    validFeedback: PropTypes.string,
    invalidFeedback: PropTypes.string,
};

const defaultProps = {
    isValid: false,
    showError: false,
};

const InputTextarea = props =>
    <div className="form-group">
        <label className="form-label">Opis</label>
        <textarea
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            className={`form-control ${props.showError ? (props.isValid ? 'is-valid' : 'is-invalid') : null}`}
        />
        <div className="valid-feedback">
            {props.validFeedback}
        </div>
        <div className="invalid-feedback">
            {props.invalidFeedback}
        </div>
    </div>

InputTextarea.defaultProps = defaultProps;
InputTextarea.propTypes = propTypes;

export default InputTextarea;