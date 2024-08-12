import { useLocation } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import requester from "../../../../api/requester";

export default function EditTea() {

    const { accessToken } = useContext(AuthContext)
    const location = useLocation();
    const userData = location.state || {};
    const initialValues = {
        username: userData.username || '',
        email: userData.email || '',
        tel: userData.tel || "",
        role: userData.role || '',
    };

    const validate = (values) => {
        const errors = {};
        if (!values.username) errors.title = 'Username is required';
        return errors;
    };

    const submitCallback = async (updated) => {
        const id = userData._id;
        try {
            await requester.put(`http://localhost:3030/users/${id}`, updated, {
                'X-Authorization': accessToken
            });

        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const { values, changeHandler, submitHandler, errors } = useForm(initialValues, submitCallback, validate);

    return (
        <div className="font-laila border-x-2 my-10">
            <div className="flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-2 max-w-7xl max-lg:max-w-xl w-full">
                    <form className="lg:max-w-md w-full" onSubmit={submitHandler}>
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Edit User</h3>
                        <div className="space-y-3">
                            <div>
                                <label htmlFor='username' className="text-gray-800 text-xl mb-2 block">Username</label>
                                <input
                                    name="username"
                                    id='username'
                                    type="text"
                                    value={values.username}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.title ? 'border-red-500' : ''}`}
                                    placeholder="Enter username"
                                />
                            </div>

                            <div>
                                <label htmlFor='tel' className="text-gray-800 text-xl mb-2 block">Telephone</label>
                                <input
                                    name="tel"
                                    id='tel'
                                    type="tel"
                                    value={values.tel}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.price ? 'border-red-500' : ''}`}
                                    placeholder="Enter telephone"
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className="text-gray-800 text-xl mb-2 block">Email</label>
                                <input
                                    name="email"
                                    id='email'
                                    type="text"
                                    value={values.email}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.package ? 'border-red-500' : ''}`}
                                    placeholder="Enter email"
                                />
                            </div>

                            <div>
                                <label htmlFor='role' className="text-gray-800 text-xl mb-2 block">Role</label>
                                <select
                                    id="role"
                                    name="role"
                                    value={values.role}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.type ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select Role</option>
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>

                        </div>

                        <div className="mt-12">
                            <input
                                type="submit"
                                value="Edit"
                                className="py-4 px-8 text-xl font-semibold text-black tracking-wide bg-lime-200 hover:bg-lime-300 focus:outline-none"
                            />
                        </div>
                    </form>

                    <div className="h-3/4 max-lg:mt-12">
                        <img
                            src="https://media.istockphoto.com/id/1344854800/vector/sepia-colored-illustration-of-rice-planting-landscape.jpg?s=612x612&w=0&k=20&c=bn3Z6D2AoVUweIlGyd9Pe51Mhl3rSYxZ4PbNlIsviy0="
                            className="w-full h-full object-fill"
                            alt="user"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}