export const loginHandler = (response, path, navigate, login) => {
    login();
    const data = response.data;
    localStorage.setItem('token-data', JSON.stringify({
        email: data.email,
        token: data.idToken,
        userId: data.idUser,
    }));
    switch (path) {
        case "/Dom":
            navigate("/");
            break;
        default:
            navigate(`${path}`, {replace: true});
    }
}