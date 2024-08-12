import { useLocation } from "react-router-dom";
import { useForm } from "../../../../hooks/useForm";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import requester from "../../../../api/requester";

export default function EditUtensils() {

    const { accessToken } = useContext(AuthContext)
    const location = useLocation();
    const UtensilsData = location.state || {};
    const initialValues = {
        title: UtensilsData.title || '',
        price: UtensilsData.price || '',
        package: UtensilsData.package || '',
        image: UtensilsData.image || '',
        description: UtensilsData.description || '',
    };

    const validate = (values) => {
        const errors = {};
        if (!values.title) errors.title = 'Tea name is required';
        if (!values.price) errors.price = 'Price is required';
        return errors;
    };

    const submitCallback = async (updated) => {
        const id = UtensilsData._id;
        try {
            await requester.put(`http://localhost:3030/api/collection/utensils/edit/${id}`,  updated , {
                'X-Authorization': accessToken
            });

        } catch (error) {
            console.error('Error updating tea:', error);
        }
    };

    const { values, changeHandler, submitHandler, errors } = useForm(initialValues, submitCallback, validate);

    return (
        <div className="font-laila border-x-2 my-10">
            <div className="flex flex-col items-center justify-center p-6">
                <div className="grid lg:grid-cols-2 items-center gap-2 max-w-7xl max-lg:max-w-xl w-full">
                    <form className="lg:max-w-md w-full" onSubmit={submitHandler}>
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-12">Edit Utensils</h3>
                        <div className="space-y-3">
                            <div>
                                <label htmlFor='title' className="text-gray-800 text-xl mb-2 block">Utensil name</label>
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
                            src={UtensilsData.image}
                            className="w-full h-full object-fill"
                            alt="Tea"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}