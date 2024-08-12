import { useForm } from "../../../../hooks/useForm";
import { post } from "../../../../api/requester";
import { useState } from "react";
import UponRequest from "../../../modals/UponRequest";
import ErrorFormModal from "../../../modals/ErrorFormModal";
import { validateRecipe } from "./validateRecipe";


const initialValues = {
    title: '',
    info: '',
    image: '',
    quantity: '',
    amount: '',
    time: '',
    aditional: ""

};


export default function CreateRecipe() {

    const [errModal, setErrModal] = useState(false);
    const [reqModal, setReqModal] = useState(false);
    const [message, setMessage] = useState("");

    const submitCallback = async (formValues) => {
        try {
            await post('http://localhost:3030/data/recipes', formValues);
            setMessage('Recipe added successfully!');
            setReqModal(true)
            updateValues(initialValues);
        } catch (err) {
            console.error('Error updating recipe:', err);
            setMessage('Failed to add the recipe.');
            setReqModal(true)
        }
    };

    const { values, changeHandler, submitHandler, updateValues, errors } = useForm(initialValues, submitCallback, validateRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setErrModal(true);
        } else {
            submitHandler(e);
        }
    };

    const closeSuccModal = () => {
        setReqModal(false);
    }


    const closeErrModal = () => {
        setErrModal(false);
    };

    return (
        <div className="font-laila border-x-2 my-10">
            <div className="flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center  gap-2 max-w-7xl max-lg:max-w-xl w-full">
                    <form className="lg:max-w-md w-full" onSubmit={handleSubmit}>
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Add Recipe</h3>
                        <div className="space-y-3">
                            <div>
                                <label htmlFor='title' className="text-gray-800 text-xl mb-2 block">Recipe name</label>
                                <input
                                    name="title"
                                    id='title'
                                    type="text"
                                    value={values.title}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Enter tea name"
                                />

                            </div>

                            <div>
                                <label htmlFor='info' className="text-gray-800 text-xl mb-2 block">Info</label>
                                <textarea
                                    name="info"
                                    id='info'
                                    type="text"
                                    value={values.info}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all" 
                                    placeholder="Enter recipe information"
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
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Enter image URL https://...."
                                />

                            </div>

                            <div>
                                <label htmlFor='quantity' className="text-gray-800 text-xl mb-2 block">Quantity</label>
                                <input
                                    name="quantity"
                                    id='quantity'
                                    type="text"
                                    value={values.quantity}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all" 
                                    placeholder="Enter quantity"
                                />

                            </div>

                            <div>
                                <label htmlFor='amount' className="text-gray-800 text-xl mb-2 block">Amount</label>
                                <input
                                    name="amount"
                                    id='amount'
                                    type="text"
                                    value={values.amount}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all "
                                    placeholder="Enter amount"
                                />

                            </div>

                            <div>
                                <label htmlFor='time' className="text-gray-800 text-xl mb-2 block">Time</label>
                                <input
                                    name="time"
                                    id='time'
                                    type="text"
                                    value={values.time}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Enter preparing time"
                                />

                            </div>

                            <div>
                                <label htmlFor='aditional' className="text-gray-800 text-xl mb-2 block">Aditional</label>
                                <input
                                    name="aditional"
                                    id='aditional'
                                    type="text"
                                    value={values.aditional}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Enter aditional info"
                                />

                            </div>

                        </div>

                        <div className="mt-12">
                            <input
                                type="submit"
                                value="Add Recipe"
                                className="py-4 px-8 text-xl font-semibold text-black tracking-wide bg-lime-200 hover:bg-lime-300 focus:outline-none"
                            />
                        </div>
                    </form>

                    <div className="h-3/4 max-lg:mt-12">
                        <img
                            src="https://janabouc.com/wp-content/uploads/2011/06/20110622_jap-teagarden.jpg"
                            className="w-full h-full object-fill"
                            alt="Recipe"
                        />
                    </div>
                </div>
            </div>

            {reqModal && <UponRequest message={message} onClose={closeSuccModal} />}
            {errModal && <ErrorFormModal errors={errors} onClose={closeErrModal} />}

        </div>
    );
}