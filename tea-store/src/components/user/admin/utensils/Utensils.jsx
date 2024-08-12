import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../../../../shared/Spinner";
import requester from "../../../../api/requester";
import ConfirmModal from "../../../modals/ConfirmModal";

export default function Utensils() {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/utensils`);
                setItems(data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems()
    }, [])

    const handleEditClick = (item) => {
        navigate(`/admin/utensils/edit/${item._id}`, { state: { ...item } });
    };

    const handleDeleteClick = (itemId) => {
        setDeleteItemId(itemId);
        setShowConfirmModal(true);
    };

    const confirmDelete = async () => {
        try {
            await requester.del(`http://localhost:3030/api/collection/utensils/${deleteItemId}`);
            setItems(items.filter(item => item._id !== deleteItemId));
        } catch (err) {
            console.error("Failed to delete the item:", err);
        } finally {
            setShowConfirmModal(false);
            setDeleteItemId(null);
        }
    };

    const cancelDelete = () => {
        setShowConfirmModal(false);
        setDeleteItemId(null);
    };

    if (isLoading) {
        return (
            <div className="my-20">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="my-10">
            <Link to={'/admin/utensils/add'}>
                <div>
                    <button className="text-3xl px-5 py-2 border-2 my-10 bg-green-200 rounded-xl hover:bg-green-400">ADD UTENSIL</button>
                </div>
            </Link>
            <div className="grid grid-cols-4 gap-7 font-laila text-start">
                {items.map(item => (

                    <div key={item._id} className="flex flex-col gap-5 tracking-widest">
                        <div className="bg-gray-200  border-2 rounded-3xl">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-xl text-[#ee9024]">{item.description}</p>
                            <p className="text-2xl">{item.title}</p>
                            <p className="text-2xl font-light">{item.price}€</p>
                            <div className="flex justify-center items-center gap-5">
                                <button onClick={() => handleEditClick(item)} className="px-5 self-start py-3 border rounded-full text-xl text-black hover:bg-blue-300 hover:ease-in-out duration-700">
                                    <i className="fa-regular fa-pen-to-square"></i>Edit
                                </button>
                                <button onClick={() => handleDeleteClick(item._id)} className="px-5 self-start py-3 border rounded-full text-xl text-black hover:bg-red-300 hover:ease-in-out duration-700">
                                    <i className="fa-solid fa-trash"></i>Delete
                                </button>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
            {showConfirmModal && (
                <ConfirmModal
                    title="Remove Utensil"
                    message="Are you sure you want to delete this utensil?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </div>
    );
}