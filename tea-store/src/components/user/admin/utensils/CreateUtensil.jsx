import { useForm } from "../../../../hooks/useForm";
import { post } from "../../../../api/requester";
import { useState } from "react";
import { validateUtensil } from "./validateUtensils";
import UponRequest from "../../../modals/UponRequest";
import ErrorFormModal from "../../../modals/ErrorFormModal";


const initialValues = {
    title: '',
    price: '',
    package: '',
    image: '',
    description: '',
};


export default function CreateUtensil() {

    const [errModal, setErrModal] = useState(false);
    const [reqModal, setReqModal] = useState(false);
    const [message, setMessage] = useState("");

    const submitCallback = async (formValues) => {
        try {
            await post('http://localhost:3030/data/utensils', formValues);
            setMessage('Utensil added successfully!');
            setReqModal(true)
            updateValues(initialValues);
        } catch (err) {
            setMessage('Failed to add the utensil.');
            setReqModal(true)
        }
    };

    const { values, changeHandler, submitHandler, updateValues, errors } = useForm(initialValues, submitCallback, validateUtensil);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length > 0) {
            setErrModal(true);
        } else {
            submitHandler(e);
        }
    };

    const closeReqModal = () => {
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
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Add utensil</h3>
                        <div className="space-y-3">
                            <div>
                                <label htmlFor='title' className="text-gray-800 text-xl mb-2 block">Utensil name</label>
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
                                <label htmlFor='price' className="text-gray-800 text-xl mb-2 block">Price</label>
                                <input
                                    name="price"
                                    id='price'
                                    type="number"
                                    value={values.price}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="Enter price"
                                />

                            </div>
                            <div>
                                <label htmlFor='package' className="text-gray-800 text-xl mb-2 block">Box size</label>
                                <input
                                    name="package"
                                    id='package'
                                    type="text"
                                    value={values.package}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all"
                                    placeholder="example : W8.6 x D8.2 x H14.1 cm"
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
                                <label htmlFor='description' className="text-gray-800 text-xl mb-2 block">Description</label>
                                <textarea
                                    name="description"
                                    id='description'
                                    value={values.description}
                                    onChange={changeHandler}
                                    className="bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all "
                                    placeholder="Enter description"
                                />

                            </div>
                        </div>

                        <div className="mt-12">
                            <input
                                type="submit"
                                value="Add Utensil"
                                className="py-4 px-8 text-xl font-semibold text-black tracking-wide bg-lime-200 hover:bg-lime-300 focus:outline-none"
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
            {reqModal && <UponRequest message={message} onClose={closeReqModal} />}
            {errModal && <ErrorFormModal errors={errors} onClose={closeErrModal} />}
        </div>
    );
}