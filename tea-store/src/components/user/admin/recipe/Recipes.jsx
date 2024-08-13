import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import requester from "../../../../api/requester";
import Spinner from "../../../../shared/Spinner";
import ConfirmModal from "../../../modals/ConfirmModal";




export default function Recipes() {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [deleteItemId, setDeleteItemId] = useState(null); 
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/recipes`);
                setItems(data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems();
    }, []);

    const handleEditClick = (item) => {
        navigate(`/admin/recipes/edit/${item._id}`, { state: { ...item } });
    };

    const handleDeleteClick = (itemId) => {
        setDeleteItemId(itemId);
        setShowConfirmModal(true); 
    };

    const confirmDelete = async () => {
        try {
            await requester.del(`http://localhost:3030/api/collection/recipes/${deleteItemId}`);
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
            <Link to={'/admin/recipes/add'}>
                <div>
                    <button className="text-3xl px-5 py-2 border-2 my-10 bg-slate-200 rounded-xl hover:bg-blue-400 duration-500">ADD RECIPE</button>
                </div>
            </Link>
            <div className="grid grid-cols-3 gap-10 my-20 font-laila">
                {items.map(item => (
                    <div key={item._id} className="border-2 rounded-xl border-black">
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div className="text-xl p-10">
                            <p>{item.title}</p>
                        </div>
                        <div className="flex justify-center items-center gap-5 py-5">
                            <button onClick={() => handleEditClick(item)} className="px-5 self-start py-3 border rounded-full text-xl text-black hover:bg-blue-300 hover:ease-in-out duration-700">
                                <i className="fa-regular fa-pen-to-square"></i>Edit
                            </button>
                            <button onClick={() => handleDeleteClick(item._id)} className="px-5 self-start py-3 border rounded-full text-xl text-black hover:bg-red-300 hover:ease-in-out duration-700">
                                <i className="fa-solid fa-trash"></i>Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showConfirmModal && (
                <ConfirmModal
                    title="Remove Recipe"
                    message="Are you sure you want to delete this recipe?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </div>
    );
}