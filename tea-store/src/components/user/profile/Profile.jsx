import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import requester from "../../../api/requester";




export default function Profile() {
    const { _id, username, email, tel, accessToken, changeAuthState } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');


    const submitCallback = async (values) => {

        try {
            const updatedUser = await requester.put(`http://localhost:3030/users/update/${_id}`, {
                username: values.username,
                email: values.email,
                tel: values.tel,
            }, {
                'X-Authorization': accessToken
            });

            changeAuthState({ ...updatedUser, accessToken });
            setError('');
            alert('Profile updated successfully');
            localStorage.removeItem('accessToken');
            changeAuthState({});
            navigate('/signin');

        } catch (error) {
            console.error('Failed to update profile', error);
            setError(error.message);
        }
    };

    const { values, changeHandler, submitHandler, updateValues } = useForm({
        username: username || '',
        email: email || '',
        tel: tel || '',
    }, submitCallback);

    useEffect(() => {
        updateValues({
            username: username || '',
            email: email || '',
            tel: tel || '',
        });
    }, [username, email, tel]);

    const removeUser = async (e) => {
        e.preventDefault();
        if (!window.confirm('Are you sure you want to delete your account?')) return;

        try {
            await requester.del(`http://localhost:3030/users/delete/${_id}`, null, {
                'X-Authorization': accessToken
            });

            changeAuthState({
                _id: "",
                username: "",
                email: "",
                tel: "",
                accessToken: "",
                isAuthenticated: false
            });
            localStorage.removeItem('accessToken');
            navigate('/');
        } catch (error) {
            console.error('Failed to delete account', error);
            setError(error.message);
        }
    };

    return (
        <div className="font-laila border-x-2 my-10">
            <div className="flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-6 max-w-7xl max-lg:max-w-xl w-full">
                    <form className="lg:max-w-md w-full" onSubmit={submitHandler}>
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Profile</h3>
                        <div className="space-y-3">
                            <div>
                                <label htmlFor='username' className="text-gray-800 text-xl mb-2 block">Name</label>
                                <input
                                    name="username"
                                    id='username'
                                    type="text"
                                    value={values.username}
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
                                <label htmlFor='tel' className="text-gray-800 text-xl mb-2 block">Mobile phone number</label>
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
                        {error && (
                            <p className='text-2xl font-bold text-red-600 p-4'>{error}</p>
                        )}
                        <div className="mt-12 flex justify-center items-center gap-10">
                            <button
                                type="submit"
                                className="py-4 px-8 text-xl font-semibold text-black tracking-wide bg-lime-200 hover:bg-lime-300 focus:outline-none"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                onClick={removeUser}
                                className="py-4 px-8 text-xl font-semibold italic text-black tracking-wide bg-red-200 hover:bg-red-300 focus:outline-none"
                            >
                                Remove
                            </button>
                        </div>
                    </form>
                    <div className="h-full max-lg:mt-12">
                        <img src="https://assets.website-files.com/59b1fc9cda04fb0001efe609/59d322c8b1646100011ef57b_old_gravures_01.jpg" className="w-full h-full object-cover" alt="Dining Experience" />
                    </div>
                </div>
            </div>
        </div>
    );
}