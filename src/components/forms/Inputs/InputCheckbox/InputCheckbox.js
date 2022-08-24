import PropTypes from "prop-types";

const propTypes = {
    description: PropTypes.string,
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    option: PropTypes.array,
};

const defaultProps = {
    isValid: false,
    showError: false,
};

const InputCheckbox = props => {
    const changeFeatureHandler = event => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            props.onChange([...props.value, value]);
        } else {
            props.onChange(props.value.filter(x => x !== value));
        }
    }

    return <div className="form-group">
        <h3 className="fw-bold">{props.description}</h3>
        {props.option.map(option =>
            <div key={option.value}>
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={props.value.find(x => x === option.value || false)}
                    value={option.value}
                    name={option.value}
                    id={option.value}
                    onChange={changeFeatureHandler}
                />
                <label className="form-check-label" htmlFor={option.value}>
                    {option.label}
                </label>
                <br/>
            </div>
        )}

    </div>;
};

InputCheckbox.defaultProps = defaultProps;
InputCheckbox.propTypes = propTypes;

export default InputCheckbox;