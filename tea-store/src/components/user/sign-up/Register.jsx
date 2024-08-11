
import { useRegister } from '../../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';

const initialValues = { name: "", email: "", password: "", repass: "", tel: "" }

const validate = (values) => {
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

export default function Register() {

    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState("");


    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {
        try {
            await register(values.name, values.email, values.password, values.tel);
            navigate('/');
        } catch (error) {
            setModalContent(error.message);
            setModal(true);
        }
    };

    const { values, changeHandler, submitHandler, errors } = useForm(initialValues, registerHandler, validate);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length > 0) {
            setModalContent(Object.values(validationErrors).join(', '));
            setModal(true);
        } else {
            submitHandler(e);
        }
    };

    return (
        <div className="font-laila border-x-2 my-10">
            <div className="flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
                    <form className="lg:max-w-md w-full" onSubmit={handleFormSubmit}>
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Sign up</h3>
                        <div className="space-y-3">
                            <div>
                                <label htmlFor='name' className="text-gray-800 text-xl mb-2 block">Name</label>
                                <input
                                    name="name"
                                    id='name'
                                    type="text"
                                    value={values.name}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className="text-gray-800 text-xl mb-2 block">Email</label>
                                <input
                                    name="email"
                                    id='email'
                                    type="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className="text-gray-800 text-xl mb-2 block">Password</label>
                                <input
                                    name="password"
                                    id='register-password'
                                    type="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div>
                                <label htmlFor='repass' className="text-gray-800 text-xl mb-2 block">Repeat password</label>
                                <input
                                    name="repass"
                                    id='confirm-pass'
                                    type="password"
                                    value={values.repass}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Repeat password"
                                />
                            </div>
                            <div>
                                <label className="text-gray-800 text-xl mb-2 block">Mobile phone number</label>
                                <input
                                    name="tel"
                                    id='tel'
                                    type="tel"
                                    value={values.tel}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="+359XXXXXXXXX"
                                />
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-m font-semibold font-kreon italic">Creating an account will allow you to enjoy the convenience of shopping.</p>
                            <input type="submit" value="Register" className="py-4 px-8 text-xl font-semibold text-black tracking-wide bg-lime-200 hover:bg-lime-300 focus:outline-none" />
                        </div>
                        <p className="text-xl text-gray-800 mt-6">Already have an account? <Link to="/signin" className="text-blue-600 font-semibold hover:underline ml-1">Sign in here</Link></p>
                    </form>

                    <div className="h-full max-lg:mt-12">
                        <img src="https://littleprayertea.com/cdn/shop/articles/CosmicCrypto_japanese_tea_ceremony_watercolor_minimalist_a91b585c-d545-46f2-891c-950e7200cead.png?v=1678951847" className="w-full h-full object-cover" alt="Dining Experience" />
                    </div>
                </div>
            </div>

            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-xl font-bold mb-4">Validation Error</h2>
                        <p className="text-gray-700 mb-4">{modalContent}</p>
                        <button
                            onClick={() => setModal(false)}
                            className="px-4 py-2 bg-red-500 text-white rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}