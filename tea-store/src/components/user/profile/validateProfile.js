export const validateProfile = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username is required';
    } else if (values.username.length < 4) {
        errors.username = "Username must be at least 4 characters";
    }
    if (!values.email) {
        errors.email = 'Email is required';
    } else if (values.email.length < 10) {
        errors.email = "Email must be at least 10 characters";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.tel) {
        errors.tel = 'Telephone is required';
    }
    return errors;
};