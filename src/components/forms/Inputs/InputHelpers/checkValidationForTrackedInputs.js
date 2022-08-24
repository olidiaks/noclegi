export const checkValidationForTrackedInputs = trackInputs => {
    for (const variable of trackInputs) {
        if (variable instanceof Object) {
            if (!variable.showError || !variable.isValid) {
                return false;
            }
        }
    }
    return true;
}