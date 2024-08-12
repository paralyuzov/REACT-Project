export const validateLogin = ({ email, password }) => {
    const errors = {};

    if (!email) {
        errors.email = "Email is required.";
    } else if (email.length < 10) {
        errors.email = "Email must be at least 10 characters"
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!password) {
        errors.password = "Password is required.";
    } else if (password.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
    }

    return errors;
};