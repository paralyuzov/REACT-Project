import { useForm } from "../../../hooks/useForm";
import { post } from "../../../api/requester";
import { useState } from "react";



const initialValues = {
    title: '',
    type: '',
    price: '',
    package: '',
    weight: '',
    serving: '',
    ingredients: '',
    image: '',
    life: '',
    description: '',
};

const validate = (values) => {
    const errors = {};

    if (!values.title) errors.title = 'Title is required';
    if (!values.type) errors.type = 'Type is required';
    if (!values.price) errors.price = 'Price is required';
    if (!values.package) errors.package = 'Package dimension is required';
    if (!values.weight) errors.weight = 'Weight is required';
    if (!values.serving) errors.serving = 'Serving is required';
    if (!values.ingredients) errors.ingredients = 'Ingredients are required';
    if (!values.image) errors.image = 'Image URL is required';
    if (!values.life) errors.life = 'Shelf life is required';
    if (!values.description) errors.description = 'Description is required';

    return errors;
};

export default function CreateItem() {



    const [modal, setModal] = useState({ visible: false, content: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitCallback = async (formValues) => {
        try {
            setIsSubmitting(true);
            await post('http://localhost:3030/data/tea', formValues);
            setModal({
                visible: true,
                content: 'Tea added successfully!',
                type: 'success',
            });
            updateValues(initialValues); 
        } catch (err) {
            setModal({
                visible: true,
                content: 'Error adding tea. Please try again.',
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
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Add tea</h3>
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
                                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
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
                                {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
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
                                {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
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
                                {errors.package && <p className="text-red-500 text-sm">{errors.package}</p>}
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
                                {errors.weight && <p className="text-red-500 text-sm">{errors.weight}</p>}
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
                                {errors.serving && <p className="text-red-500 text-sm">{errors.serving}</p>}
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
                                {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
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
                                {errors.life && <p className="text-red-500 text-sm">{errors.life}</p>}
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
                                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                            </div>
                        </div>

                        <div className="mt-12">
                            <input
                                type="submit"
                                value={isSubmitting ? "Adding..." : "Add Tea"}
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