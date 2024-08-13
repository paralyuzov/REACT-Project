import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import requester from "../../../../api/requester";
import Spinner from "../../../../shared/Spinner";
import ConfirmModal from "../../../modals/ConfirmModal";




export default function Teas() {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [active, setActive] = useState('all')
    const [filteredItems, setFilteredItems] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/teas`);
                setItems(data);
                setIsLoading(false);
                setFilteredItems(data)
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems()
    }, [])

    const handleEditClick = (item) => {
        navigate(`/admin/teas/edit/${item._id}`, { state: { ...item } });
    };

    const handleDeleteClick = (itemId) => {
        setDeleteItemId(itemId);
        setShowConfirmModal(true);
    };

    const confirmDelete = async () => {
        try {
            await requester.del(`http://localhost:3030/api/collection/teas/${deleteItemId}`);
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

    const handleFilter = (type) => {
        setActive(type)
        if (type === "all") {
            setFilteredItems(items);
        } else {
            setFilteredItems(items.filter(item => item.type === type));
        }
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

            <h2 className="text-2xl font-bold font-kreon">SORT BY TYPE</h2>
            <div className="flex justify-evenly items-center my-10 font-kreon">
                <Link to={'/admin/teas/add'}>
                    <div className="inline">
                        <button className="text-3xl px-5 py-2 border-2 my-10 bg-slate-200 rounded-xl hover:bg-blue-400 duration-500">ADD TEA</button>
                    </div>
                </Link>
                <button
                    onClick={() => handleFilter("matcha")}
                    className={`px-5 py-2 rounded-xl  ${active === "matcha" ? "bg-green-300 duration-1000" : "bg-slate-200"}`}
                >
                    Matcha
                </button>

                <button
                    onClick={() => handleFilter("gyokuro")}
                    className={`px-5 py-2 rounded-xl  ${active === "gyokuro" ? "bg-green-300 duration-1000" : "bg-slate-200"}`}
                >
                    Gyokuro
                </button>

                <button
                    onClick={() => handleFilter("sencha")}
                    className={`px-5 py-2 rounded-xl  ${active === "sencha" ? "bg-green-300 duration-1000" : "bg-slate-200"}`}
                >
                    Sencha
                </button>

                <button
                    onClick={() => handleFilter("hojicha")}
                    className={`px-5 py-2 rounded-xl  ${active === "hojicha" ? "bg-green-300 duration-1000" : "bg-slate-200"}`}
                >
                    Hojicha
                </button>
                <button
                    onClick={() => handleFilter("organic")}
                    className={`px-5 py-2 rounded-xl  ${active === "organic" ? "bg-green-300 duration-1000" : "bg-slate-200"}`}
                >
                    Organic
                </button>
                <button
                    onClick={() => handleFilter("teabag")}
                    className={`px-5 py-2 rounded-xl  ${active === "teabag" ? "bg-green-300 duration-1000" : "bg-slate-200"}`}
                >
                    Teabags
                </button>
                <button
                    onClick={() => handleFilter("all")}
                    className={`px-5 py-2 rounded-xl  ${active === "all" ? "bg-green-300 duration-1000" : "bg-slate-200"}`}
                >
                    Show all
                </button>
            </div>
            <div className="grid grid-cols-4 gap-7 font-laila text-start">
                {filteredItems.map(item => (

                    <div key={item._id} className="flex flex-col gap-5 tracking-widest">
                        <div className="bg-gray-200  border-2 rounded-3xl">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-xl text-[#ee9024]">{item.description}</p>
                            <p className="text-2xl">{item.title} {item.weight}g</p>
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
                    title="Remove Tea"
                    message="Are you sure you want to delete this tea?"
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </div>
    );
}