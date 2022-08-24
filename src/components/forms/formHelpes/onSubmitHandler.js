export const onSubmitHandler = (event, setLoading, setSuccess) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    }, 500);
};