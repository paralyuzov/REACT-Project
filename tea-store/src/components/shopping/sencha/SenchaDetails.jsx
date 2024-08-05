import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { useFavorites } from "../../../contexts/FavoritesContext";
import { AuthContext } from "../../../contexts/AuthContext";
import requester from "../../../api/requester";


export default function SenchaDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const {isAuthenticated} = useContext(AuthContext);

    const [item, setItem] = useState([]);
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const favorite = item ? isFavorite(item._id) : false;


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/sencha/${id}`);
                setItem(data);
            } catch (err) {
                if (err.message == "Invalid ID") {
                    navigate('/page-not-found');
                }
            }
        };

        fetchItems()
    }, [id, isFavorite])

    const handleQuantityChange = (delta) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    }

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            navigate("/signin")
            return;
        }
        addToCart({ ...item, quantity })
    }

    const handleClick = async () => {
        if (!isAuthenticated) {
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
                        <p className="text-5xl font-laila">{item.title} <span>{item.weight}g</span></p>
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
                <h2 className="text-4xl my-10">How to prepare</h2>
                <div className="flex flex-col justify-center gap-10 items-center">
                    <div className="mt-10">
                        <div className="pb-20">
                            <h3 className="text-5xl">Basic Shincha</h3>
                        </div>
                        <div className="flex justify-center items-center max-w-2xl text-2xl border-2 rounded-xl p-8 font-laila">
                            <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-brands fa-envira"></i>10g</p>
                            <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-mug-saucer"></i>210ml</p>
                            <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-temperature-three-quarters"></i>80℃</p>
                            <p className="px-5 flex justify-center items-center gap-2"><i className="fa-regular fa-clock"></i>40 sec.</p>
                        </div>
                    </div>

                    <div className="grid grid-rows3 gap-10">

                        <div className="flex items-center gap-5">
                            <div className="max-w-[200px]">
                                <img src="\src\assets\prep\sencha\sencha1.png" alt="" />
                            </div>
                            <p className="text-xl leading-loose text-start">Use 10g of leaves (2 tablespoons)</p>
                        </div>

                        <div className="flex items-center gap-5 ">
                            <div className="max-w-[200px]">
                                <img src="\src\assets\prep\sencha\sencha2.png" alt="" />
                            </div>
                            <p className="text-xl leading-loose text-start">Add 210ml of hot water (80°C)</p>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="max-w-[200px]" >
                                <img src="\src\assets\prep\sencha\sencha3.png" alt="" />
                            </div>
                            <p className="text-xl leading-loose text-start">Serve 40 seconds after beginning to pour the hot water.<br />
                                *Shincha 2024, brew for slightly longer, for 50 seconds.</p>
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
                        <p className="text-3xl">{item.title} {item.weight}g</p>
                        <p>Size of Package : {item.package}</p>
                        <p>Net Weight : {item.weight} grams</p>
                        <p>Per Serving: {item.serving}</p>
                        <p>Ingridients : {item.ingredients}</p>
                        <p>Shelf Life : {item.life}</p>
                    </div>

                </div>
            </div>


        </div>
    );
}