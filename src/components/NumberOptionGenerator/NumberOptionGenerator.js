import {number, string} from "prop-types";

const propTypes = {
    from: number.isRequired,
    to: number.isRequired,
    className: string,
}

const NumberOptionGenerator = props => {
    const options = [];
    for (let i = props.from; i <= props.to; i++) {
        options.push(<option key={i} value={i} className={props.className}>{i}</option>);
    }
    return options;
}

NumberOptionGenerator.propTypes = propTypes;

export default NumberOptionGenerator;
