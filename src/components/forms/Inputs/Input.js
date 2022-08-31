import PropTypes from "prop-types";
import InputTextNumber from "./InputTextNumber/InputTextNumber";
import InputTextarea from "./InputTextarea/InputTextarea";
import InputSelect from "./InputSelect/InputSelect";
import InputCheckbox from "./InputCheckbox/InputCheckbox";
import InputFile from "./InputFile/InputFile";
import InputRadio from "./InputRadio/InputRadio";

const propTypes = {
    description: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.number,
    ]),
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    showError: PropTypes.bool,
    isValid: PropTypes.bool,
    validFeedback: PropTypes.string,
    invalidFeedback: PropTypes.string,
    option: PropTypes.array,
    name: PropTypes.string,
};

const defaultProps = {
    type: "text",
    isValid: false,
    showError: false,
};


const Input = props => {
    switch (props.type) {
        case "text":
        case "number":
        case "email":
        case "password":
            return <InputTextNumber {...props}/>;
        case "textarea":
            return <InputTextarea {...props}/>;
        case "select":
            return <InputSelect {...props}/>;
        case "checkbox":
            return <InputCheckbox {...props}/>;
        case "file":
            return <InputFile {...props}/>;
        case "radio":
            return <InputRadio {...props}/>;
        default:
            return <div className="alert alert-danger">Nie przewidziano takiego typu input.</div>
    }

};
Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;