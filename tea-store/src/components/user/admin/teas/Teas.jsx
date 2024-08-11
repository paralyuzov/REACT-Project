import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import requester from "../../../../api/requester";
import Spinner from "../../../../shared/Spinner";




export default function Teas() {

    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/teas`);
                setItems(data);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems()
    }, [])

    const handleEditClick = (item) => {
        navigate(`/admin/teas/edit/${item._id}`, { state: { ...item } });
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
            <Link to={'/admin/teas/add'}>
                <div>
                    <button className="text-3xl px-5 py-2 border-2 my-10 bg-green-200 rounded-xl hover:bg-green-400">ADD ITEM</button>
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
                            <p className="text-2xl">{item.title} {item.weight}g</p>
                            <p className="text-2xl font-light">{item.price}€</p>
                            <div className="flex justify-center items-center gap-5">
                                <button onClick={() => handleEditClick(item)} className="px-5 self-start py-3 border rounded-full text-xl text-black hover:bg-blue-300 hover:ease-in-out duration-700">
                                    <i className="fa-regular fa-pen-to-square"></i>Edit
                                </button>
                                <button className="px-5 self-start py-3 border rounded-full text-xl text-black hover:bg-red-300 hover:ease-in-out duration-700">
                                    <i className="fa-solid fa-trash"></i>Delete
                                </button>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}