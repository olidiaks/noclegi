export const loginHandler = (response, path, navigate, login) => {

    const data = response.data;
    localStorage.setItem('token-data', JSON.stringify({
        email: data.email,
        token: data.idToken,
        userId: data.localId,
    }));
    login();
    switch (path) {
        case "/Dom":
            navigate("/");
            break;
        default:
            navigate(`${path}`, {replace: true});
    }
}