import { Link, useNavigate } from "react-router-dom";

import { useLogin } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: "", password: "" }

export default function Login() {

    const [error, setError] = useState("");
    const [modal, setModal] = useState(false);

    const login = useLogin();
    const navigate = useNavigate();

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
            setModal(true);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <div className="font-laila border-x-2 my-10">
            <div className="flex fle-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
                    <form id="login" className="lg:max-w-md w-full" onSubmit={submitHandler}>
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Sign in</h3>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="email" className="text-gray-800 text-xl mb-2 block">Email</label>
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={values.emai}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-gray-800 text-xl mb-2 block">Password</label>
                                <input
                                    name="password"
                                    id="password"
                                    type="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all" placeholder="Enter password" />
                            </div>

                        </div>

                        <div className="mt-12">
                            <input type="submit" value="Login" className="py-4 px-8 text-xl font-semibold text-black tracking-wide bg-lime-200 hover:bg-lime-300 focus:outline-none" />
                        </div>
                        <p className="text-xl text-gray-800 mt-6">You dont have a registration?<Link to="/signup" className="text-blue-600 font-semibold hover:underline ml-1">Sign up</Link></p>
                    </form>

                    <div className="h-full max-lg:mt-12">
                        <img src="https://images.squarespace-cdn.com/content/v1/55ee34aae4b0bf70212ada4c/1541637901570-MW0Y8NJI8X1WP3XSVKDJ/Japanese+Tea+Garden.jpg?format=1500w" className="w-full h-full object-cover" alt="Dining Experience" />
                    </div>
                </div>
            </div>

            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-xl font-bold mb-4">Login Error</h2>
                        <p className="text-gray-700 mb-4">{error}</p>
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