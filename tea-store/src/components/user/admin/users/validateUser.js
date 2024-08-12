

export const validateUser = (values) => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Name is required';
    } else if(values.name < 4) {
        errors.username = "Name must be at least 4 characters"
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if(values.email.length < 10) {
        errors.email = "Email must be at least 10 characters"
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if (!values.tel) {
        errors.tel = 'Phone number is required';
    }

    if(!values.role) {
        errors.role = "Role is required";
    }

    return errors;
}
