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
        PropTypes.array
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
    let i = 0;
    switch (props.type) {
        case "text" || "number":
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
    }

};
Input.defaultProps = defaultProps;
Input.propTypes = propTypes;

export default Input;