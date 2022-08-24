import {validation} from "../../validation/validation";

export const inputChangeHandler = (value, state, setState) => {
    setState({
            ...state,
            value: value,
            showError: true,
            ...validation(state.rules, value),
        }
    );
};