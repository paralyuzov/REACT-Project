import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import requester from "../../../../api/requester";
import { validateTea } from "./validateTea";
import UponRequest from "../../../modals/UponRequest";
import ErrorFormModal from "../../../modals/ErrorFormModal";

export default function EditTea() {

    const { accessToken } = useContext(AuthContext)
    const location = useLocation();
    const teaData = location.state || {};
    const navigate = useNavigate();

    const [errModal, setErrModal] = useState(false);
    const [reqModal, setReqModal] = useState(false);
    const [message, setMessage] = useState("");

    const initialValues = {
        title: teaData.title || '',
        type: teaData.type || '',
        price: teaData.price || '',
        package: teaData.package || '',
        weight: teaData.weight || '',
        serving: teaData.serving || '',
        ingredients: teaData.ingredients || '',
        image: teaData.image || '',
        life: teaData.life || '',
        description: teaData.description || '',
    };

    const submitCallback = async (updatedTea) => {
        const id = teaData._id;
        try {
            await requester.put(`http://localhost:3030/api/collection/teas/edit/${id}`, updatedTea, {
                'X-Authorization': accessToken
            });
            setMessage('Tea updated successfully!');
            setReqModal(true)

        } catch (error) {
            console.error('Error updating tea:', error);
            setMessage('Failed to update the tea.');
            setReqModal(true)
        }
    };

    const { values, changeHandler, submitHandler, errors } = useForm(initialValues, submitCallback, validateTea);

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
        navigate('/admin/teas')
    }


    const closeErrModal = () => {
        setErrModal(false);
    };

    return (
        <div className="font-laila border-x-2 my-10">
            <div className="flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-2 max-w-7xl max-lg:max-w-xl w-full">
                    <form className="lg:max-w-md w-full" onSubmit={handleSubmit}>
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Edit tea</h3>
                        <div className="space-y-3">
                            <div>
                                <label htmlFor='title' className="text-gray-800 text-xl mb-2 block">Tea name</label>
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
                                <label htmlFor='type' className="text-gray-800 text-xl mb-2 block">Type Of Tea</label>
                                <select
                                    id="type"
                                    name="type"
                                    value={values.type}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.type ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select type</option>
                                    <option value="matcha">Matcha</option>
                                    <option value="gyokuro">Gyokuro</option>
                                    <option value="sencha">Sencha</option>
                                    <option value="hojicha">Hojicha</option>
                                    <option value="teabag">Teabag</option>
                                    <option value="organic">Organic</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor='price' className="text-gray-800 text-xl mb-2 block">Price</label>
                                <input
                                    name="price"
                                    id='price'
                                    type="text"
                                    value={values.price}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.price ? 'border-red-500' : ''}`}
                                    placeholder="Enter price"
                                />
                            </div>
                            <div>
                                <label htmlFor='package' className="text-gray-800 text-xl mb-2 block">Package dimension</label>
                                <input
                                    name="package"
                                    id='package'
                                    type="text"
                                    value={values.package}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.package ? 'border-red-500' : ''}`}
                                    placeholder="example : W8.6 x D8.2 x H14.1 cm"
                                />
                            </div>
                            <div>
                                <label htmlFor='weight' className="text-gray-800 text-xl mb-2 block">Weight</label>
                                <input
                                    name="weight"
                                    id='weight'
                                    type="text"
                                    value={values.weight}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.weight ? 'border-red-500' : ''}`}
                                    placeholder="Enter package weight"
                                />
                            </div>
                            <div>
                                <label htmlFor='serving' className="text-gray-800 text-xl mb-2 block">Serving</label>
                                <input
                                    name="serving"
                                    id='serving'
                                    type="text"
                                    value={values.serving}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.serving ? 'border-red-500' : ''}`}
                                    placeholder="Enter tea serving (grams for preparing)"
                                />
                            </div>
                            <div>
                                <label htmlFor='ingredients' className="text-gray-800 text-xl mb-2 block">Ingredients</label>
                                <input
                                    name="ingredients"
                                    id='ingredients'
                                    type="text"
                                    value={values.ingredients}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.ingredients ? 'border-red-500' : ''}`}
                                    placeholder="Green tea (Japan)"
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
                                    placeholder="Enter image URL https://...."
                                />
                            </div>
                            <div>
                                <label htmlFor='life' className="text-gray-800 text-xl mb-2 block">Shelf Life</label>
                                <input
                                    name="life"
                                    id='life'
                                    type="text"
                                    value={values.life}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.life ? 'border-red-500' : ''}`}
                                    placeholder="Enter shelf life (e.g., 180 days)"
                                />
                            </div>
                            <div>
                                <label htmlFor='description' className="text-gray-800 text-xl mb-2 block">Description</label>
                                <textarea
                                    name="description"
                                    id='description'
                                    value={values.description}
                                    onChange={changeHandler}
                                    className={`bg-gray-100 w-full text-gray-800 text-xl px-4 py-4 focus:bg-transparent outline-lime-200 transition-all ${errors.description ? 'border-red-500' : ''}`}
                                    placeholder="Enter description"
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
                            src={teaData.image}
                            className="w-full h-full object-fill"
                            alt="Tea"
                        />
                    </div>
                </div>
            </div>
            {reqModal && <UponRequest message={message} onClose={closeSuccModal} />}
            {errModal && <ErrorFormModal errors={errors} onClose={closeErrModal} />}
        </div>
    );
}