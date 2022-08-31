import PropTypes from "prop-types";

const propTypes = {
    description: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    option: PropTypes.array.isRequired,
};


const InputSelect = props => {
    return <div className="form-group">
        <label htmlFor="rooms" className="form-label">{props.description}</label>
        <select
            value={props.value}
            onChange={event => props.onChange(event.target.value)}
            className="form-select"
        >
            {props.option.map(option =>
                <option key={option.value} value={option.value}>{option.label}</option>
            )}
        </select>
    </div>;
};


InputSelect.propTypes = propTypes;


export default InputSelect