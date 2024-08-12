import { useForm } from "../../../../hooks/useForm";
import { post } from "../../../../api/requester";
import { useState } from "react";

const initialValues = {
    title: '',
    info: '',
    image: '',
    quantity: '',
    amount: '',
    time: '',
    aditional: ""

};

const validate = (values) => {
    const errors = {};

    if (!values.title) errors.title = 'Title is required';
  

    return errors;
};

export default function CreateRecipe() {

    const [modal, setModal] = useState({ visible: false, content: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitCallback = async (formValues) => {
        try {
            setIsSubmitting(true);
            await post('http://localhost:3030/data/recipes', formValues);
            setModal({
                visible: true,
                content: 'Recipe added successfully!',
                type: 'success',
            });
            updateValues(initialValues);
        } catch (err) {
            setModal({
                visible: true,
                content: 'Error adding recipe. Please try again.',
                type: 'error',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const { values, changeHandler, submitHandler, updateValues, errors } = useForm(initialValues, submitCallback, validate);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validate(values);
        if (Object.keys(formErrors).length > 0) {
            setModal({
                visible: true,
                content: Object.values(formErrors).join(', '),
                type: 'error',
            });
        } else {
            submitHandler(e);
        }
    };

    const closeModal = () => {
        setModal({ ...modal, visible: false });
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
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.title ? 'border-red-500' : ''}`}
                                    placeholder="Enter tea name"
                                />
                                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                            </div>

                            <div>
                                <label htmlFor='info' className="text-gray-800 text-xl mb-2 block">Info</label>
                                <textarea
                                    name="info"
                                    id='info'
                                    type="text"
                                    value={values.info}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.price ? 'border-red-500' : ''}`}
                                    placeholder="Enter recipe information"
                                />
                                {errors.info && <p className="text-red-500 text-sm">{errors.info}</p>}
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
                                    placeholder="Enter image URL https://...."
                                />
                                {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                            </div>

                            <div>
                                <label htmlFor='quantity' className="text-gray-800 text-xl mb-2 block">Quantity</label>
                                <input
                                    name="quantity"
                                    id='quantity'
                                    type="text"
                                    value={values.quantity}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.description ? 'border-red-500' : ''}`}
                                    placeholder="Enter quantity"
                                />
                                {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
                            </div>

                            <div>
                                <label htmlFor='amount' className="text-gray-800 text-xl mb-2 block">Amount</label>
                                <input
                                    name="amount"
                                    id='amount'
                                    type="text"
                                    value={values.amount}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.description ? 'border-red-500' : ''}`}
                                    placeholder="Enter amount"
                                />
                                {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
                            </div>

                            <div>
                                <label htmlFor='time' className="text-gray-800 text-xl mb-2 block">Time</label>
                                <input
                                    name="time"
                                    id='time'
                                    type="text"
                                    value={values.time}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.description ? 'border-red-500' : ''}`}
                                    placeholder="Enter preparing time"
                                />
                                {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                            </div>

                            <div>
                                <label htmlFor='aditional' className="text-gray-800 text-xl mb-2 block">Aditional</label>
                                <input
                                    name="aditional"
                                    id='aditional'
                                    type="text"
                                    value={values.aditional}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.description ? 'border-red-500' : ''}`}
                                    placeholder="Enter aditional info"
                                />
                                {errors.aditional && <p className="text-red-500 text-sm">{errors.aditional}</p>}
                            </div>

                        </div>

                        <div className="mt-12">
                            <input
                                type="submit"
                                value={isSubmitting ? "Adding..." : "Add Recipe"}
                                className="py-4 px-8 text-xl font-semibold text-black tracking-wide bg-lime-200 hover:bg-lime-300 focus:outline-none"
                                disabled={isSubmitting}
                            />
                        </div>
                    </form>

                    <div className="h-3/4 max-lg:mt-12">
                        <img
                            src="https://janabouc.com/wp-content/uploads/2011/06/20110622_jap-teagarden.jpg"
                            className="w-full h-full object-fill"
                            alt="Tea"
                        />
                    </div>
                </div>
            </div>

            {modal.visible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md">
                        <h2 className="text-xl font-bold mb-4">{modal.type === 'success' ? 'Success' : 'Error'}</h2>
                        <p className="text-gray-700 mb-4">{modal.content}</p>
                        <button
                            onClick={closeModal}
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