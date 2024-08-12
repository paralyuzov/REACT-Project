import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import requester from "../../../../api/requester";
import { validateRecipe } from "./validateRecipe.js";
import ErrorModal from "../../../modals/ErrorFormModal.jsx";
import SuccessModal from "../../../modals/UponRequest.jsx";

export default function EditRecipe() {

    const { accessToken } = useContext(AuthContext)
    const location = useLocation();
    const RecipeData = location.state || {};
    const navigate = useNavigate();

    const [errModal, setErrModal] = useState(false);
    const [succModal, setSuccModal] = useState(false);
    const [message, setMessage] = useState("");

    const initialValues = {
        title: RecipeData.title || '',
        info: RecipeData.info || '',
        image: RecipeData.image || '',
        quantity: RecipeData.preparing.quantity || '',
        amount: RecipeData.preparing.amount || '',
        time: RecipeData.preparing.time || '',
        aditional: RecipeData.preparing.aditional || ""

    };


    const submitCallback = async (updated) => {
        const id = RecipeData._id;
        try {
            await requester.put(`http://localhost:3030/api/collection/recipes/edit/${id}`, updated, {
                'X-Authorization': accessToken
            });
            setMessage('Recipe updated successfully!');
            setSuccModal(true)

        } catch (error) {
            console.error('Error updating recipe:', error);
            setMessage('Failed to update the recipe.');
            setSuccModal(true)
        }
    };

    const { values, changeHandler, submitHandler, errors } = useForm(initialValues, submitCallback, validateRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setErrModal(true);
        } else {
            submitHandler(e);
        }
    };

    const closeSuccModal = () => {
        setSuccModal(false);
        navigate('/admin/recipes')
    }


    const closeErrModal = () => {
        setErrModal(false);
    };

    return (
        <div className="font-laila border-x-2 my-10">
            <div className="flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-2 max-w-7xl max-lg:max-w-xl w-full">
                    <form className="lg:max-w-md w-full" onSubmit={handleSubmit}>
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Edit Recipe</h3>
                        <div className="space-y-3">
                            <div>
                                <label htmlFor='title' className="text-gray-800 text-xl mb-2 block">Recipe name</label>
                                <input
                                    name="title"
                                    id='title'
                                    type="text"
                                    value={values.title}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.title ? 'border-red-500' : ''}`}
                                    placeholder="Enter tea name"
                                />
                            </div>

                            <div>
                                <label htmlFor='info' className="text-gray-800 text-xl mb-2 block">Info</label>
                                <textarea
                                    name="info"
                                    id='info'
                                    type="info"
                                    value={values.info}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.price ? 'border-red-500' : ''}`}
                                    placeholder="Enter Info"
                                />
                            </div>

                            <div>
                                <label htmlFor='image' className="text-gray-800 text-xl mb-2 block">Image URL</label>
                                <input
                                    name="image"
                                    id='image'
                                    type="text"
                                    value={values.image}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.image ? 'border-red-500' : ''}`}
                                    placeholder="Enter image URL http:// or https://"
                                />
                            </div>

                            <div>
                                <label htmlFor='quantity' className="text-gray-800 text-xl mb-2 block">Quantity</label>
                                <input
                                    name="quantity"
                                    id='quantity'
                                    value={values.quantity}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.description ? 'border-red-500' : ''}`}
                                    placeholder="Enter quantity"
                                />
                            </div>

                            <div>
                                <label htmlFor='amount' className="text-gray-800 text-xl mb-2 block">Amount</label>
                                <input
                                    name="amount"
                                    id='amount'
                                    value={values.amount}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.description ? 'border-red-500' : ''}`}
                                    placeholder="Enter amount"
                                />
                            </div>

                            <div>
                                <label htmlFor='time' className="text-gray-800 text-xl mb-2 block">Time</label>
                                <input
                                    name="time"
                                    id='time'
                                    value={values.time}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.description ? 'border-red-500' : ''}`}
                                    placeholder="Enter time for preparing"
                                />
                            </div>

                            <div>
                                <label htmlFor='aditional' className="text-gray-800 text-xl mb-2 block">Aditional</label>
                                <textarea
                                    name="aditional"
                                    id='aditional'
                                    value={values.aditional}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.description ? 'border-red-500' : ''}`}
                                    placeholder="Enter aditional infromation"
                                />
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
                            src={RecipeData.image}
                            className="w-full h-full object-fill"
                            alt="Tea"
                        />
                    </div>
                </div>
            </div>
            {succModal && <SuccessModal message={message} onClose={closeSuccModal} />}
            {errModal && <ErrorModal errors={errors} onClose={closeErrModal} />}
        </div>
    );
}