export const validateUtensil = (values) => {
    const errors = {};

    if (!values.title) {
        errors.title = "Utensil name is required";
    } else if (values.title.length < 6) {
        errors.title = "Utensil name must be at least 6 characters long"
    }

    if (!values.price) {
        errors.price = "Price is required";
    } else if (Number(values.price) <= 0) {
        errors.price = "Price must be a positive number";
    }


    if (!values.package) {
        errors.package = "Package dimension is required"
    } else if (values.package.length < 6) {
        errors.package = "Package dimension must be at least 6 characters long"
    }

    if (!values.image) {
        errors.image = 'Image URL is required';
    } else if (!/^https?:\/\//.test(values.image)) {
        errors.image = "Image url must start with http:// or https://";
    }

    if (!values.description) errors.description = 'Description is required';

    return errors;
}