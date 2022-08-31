export function firebaseErrorsHandler(response) {
    switch (response.data.error.message) {
        case "EMAIL_EXISTS":
            return "Ten adres email został już wcześniej wykorzystany.";
        case "INVALID_EMAIL":
            return "Podany \"email\" nim nie jest. Poprawny przykładowy email. twójemail@witrynaSerweraNaKturymJestTwójEmail.pl";
        case "EMAIL_NOT_FOUND":
            return "Na ten email nie zostało założone żadne konto.";
        case "INVALID_PASSWORD":
            return "Nie poprawne hasło.";
        case "MISSING_PASSWORD":
            return "Nie podano hasła.";
        case "CREDENTIAL_TOO_OLD_LOGIN_AGAIN":
            return "Dane logowania są za stare, musisz się prze logować."
        case "Unauthorized":
            return "Sesja wygasła nie można autoryzować zapytania do bazy danych. Należy się prze logować.";
        default:
            return response.data.error.message;
    }
}