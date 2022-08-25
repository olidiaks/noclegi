export function firebaseErrorsHandler(response) {
    switch (response.data.error.message) {
        case "EMAIL_EXISTS":
            return "Ten adres email został już wcześniej wykorzystany.";
        default:
            return response.data.error.message;
    }
}