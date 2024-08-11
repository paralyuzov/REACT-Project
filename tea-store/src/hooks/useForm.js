import { useState } from 'react';

export function useForm(initialValues, submitCallback, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setValues(prevState => ({
            ...prevState, [e.target.name]: e.target.value
        }));

        setErrors(prevErrors => {
            const validationErrors = validate({ ...values, [e.target.name]: e.target.value });
            if (!validationErrors[e.target.name]) {
                const { [e.target.name]: removedError, ...rest } = prevErrors;
                return rest;
            }
            return {
                ...prevErrors,
                [e.target.name]: validationErrors[e.target.name],
            };
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        submitCallback(values);
    }

    const updateValues = (newValues) => {
        setValues(prevValues => ({
            ...prevValues,
            ...newValues
        }));
    };

    return { values, changeHandler, submitHandler, updateValues, errors };
}