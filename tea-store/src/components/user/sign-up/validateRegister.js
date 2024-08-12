export const validateRegister = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Name is required';
    } else if(values.name < 4) {
        errors.name = "Name must be at least 4 characters"
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if(values.email.length < 10) {
        errors.email = "Email must be at least 10 characters"
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    if (!values.repass) {
        errors.repass = 'Repeat password is required';
    } else if (values.repass !== values.password) {
        errors.repass = 'Passwords do not match';
    }

    if (!values.tel) {
        errors.tel = 'Phone number is required';
    }

    return errors;
};