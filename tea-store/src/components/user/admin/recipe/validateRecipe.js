

export const validateRecipe = (values) => {
    const errors = {};

    if (!values.title) {
        errors.title = "Recipe name is required";
    } else if (values.title.length < 6) {
        errors.title = "Recipe name must be at least 6 characters long";
    }

    if (!values.info) {
        errors.info = "Information is required";
    } else if (values.info.length < 10) {
        errors.info = "Information must be at least 10 characters long";
    }

    if (!values.image) {
        errors.image = "Image URL is required";
    } else if (!/^https?:\/\//.test(values.image)) {
        errors.image = "Image url must start with http:// or https://";
    }

    if (!values.quantity) {
        errors.quantity = "Quantity is required!";
    } else if (values.quantity.length < 6) {
        errors.quantity = "Quantity must be at least 6 characters long";
    }

    if (!values.amount) {
        errors.amount = "Amount is required"
    } else if (values.amount.length < 6) {
        errors.amount = "Amount must be at least 6 characters long";
    }

    if (!values.time) {
        errors.time = "Time to prepare is required"
    } else if (values.time.length < 2) {
        errors.time = "Time must be at least 2 characters long";
    }

    if (!values.aditional) {
        errors.aditional = "Aditional information is required"
    } else if (values.aditional.length < 10) {
        errors.aditional = "Aditional information must be at least 10 characters long"
    }

    return errors;
}