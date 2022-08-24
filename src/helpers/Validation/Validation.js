import isEmail from "validator/es/lib/isEmail";

const availableRules = {
    required(value) {
        return value ? '' : 'Pole jest wymagane.';
    },
    min(value, rule) {
        return value.length >= rule.length ? '' : `Minimalna ilość znaków to: ${rule.length}.`
    },
    email(value) {
        return isEmail(value) ? '' : 'Email jest nie poprawny.';
    }
};

export function Validation(rules = [], value) {
    let error = {
        isValid: true,
        error: '',
    };
    for (const rule of rules) {
        let errorMessage;
        if (rule instanceof Object) {
            errorMessage = availableRules[rule.rule](value, rule)
        } else {
            errorMessage = availableRules[rule](value);
        }
        if (errorMessage) {
            error = {
                isValid: false,
                error: errorMessage,
            };
            break;
        }
    }
    return error;
}