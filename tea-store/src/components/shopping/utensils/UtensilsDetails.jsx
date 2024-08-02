import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { useFavorites } from "../../../contexts/FavoritesContext";
import { AuthContext } from "../../../contexts/AuthContext";
import requester from "../../../api/requester";


export default function UtensilsDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const isAuthenticated = useContext(AuthContext);

    const [item, setItem] = useState([]);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const favorite = item ? isFavorite(item._id) : false;


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/utensils/${id}`);
                setItem(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems()
    }, [id, isFavorite])

    const handleQuantityChange = (delta) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    }

    const handleAddToCart = () => {
        if (!isAuthenticated.accessToken) {
            navigate("/signin")
            return;
        }
        addToCart({ ...item, quantity })
    }

    const handleClick = async () => {
        if (!isAuthenticated.accessToken) {
            navigate("/signin")
            return;
        }
        try {
            if (favorite) {
                await removeFavorite(item._id);
            } else {
                await addFavorite(item._id);
            }
        } catch (error) {
            console.error('Failed to update favorites:', error);
        }
    };



    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="bg-slate-200">
                    <img src={item.image} alt="" />
                </div>


                <div>
                    <div className="flex flex-col gap-20">
                        <h2 className="text-3xl font-kreon">{item.description}</h2>
                        <p className="text-5xl font-laila">{item.title}</p>
                        <p className="text-4xl font-laila font-medium text-slate-700">€{item.price}</p>
                    </div>
                    <div className="flex justify-center items-center gap-10 my-20">
                        <p className="text-2xl text-[#9a7b38]">Quantity</p>
                        <div className="flex justify-center items-center gap-10 border-2 border-[#898170] rounded-full px-5 py-3">
                            <button onClick={() => handleQuantityChange(-1)} className="px-5 text-4xl">-</button>
                            <p className="text-3xl">{quantity}</p>
                            <button onClick={() => handleQuantityChange(1)} className="px-5 text-4xl">+</button>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col justify-center items-center gap-10 text-2xl">
                            <button onClick={handleAddToCart} className="px-5 py-5 border-2  w-1/2 bg-[#f8c659] text-white hover:bg-[#f9bf42]">Add to cart</button>
                            <button
                                className={`px-5 py-2 ${favorite ? 'text-red-500' : 'hover:text-red-500'}`}
                                onClick={handleClick}
                            >
                                <i className={`fa-regular fa-heart ${favorite ? 'fa-solid' : 'fa-regular'}`}></i>
                                {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="my-20 border-t-2">
                <h2 className="text-center text-4xl my-10 font-mono">Specs</h2>
                <div className="flex justify-center items-center">
                    <div className="w-60">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="flex flex-col justify-evenly gap-2 text-xl leading-loose">
                        <p className="text-3xl">{item.title}</p>
                        <p>Size of Package : {item.package}</p>
                    </div>

                </div>
            </div>


        </div>

    );
}