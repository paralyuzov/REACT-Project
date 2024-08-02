import { useContext, useEffect, useState } from "react";
import { useCart } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import requester from "../../../api/requester";

export default function ShopTeabags() {

    const { addToCart } = useCart();
    const isAuthenticated = useContext(AuthContext)
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/teabags`);
                setItems(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems()
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center font-kreon border-b-2 mb-5">
                <div className="flex flex-col justify-center items-center gap-10">
                    <h2 className="text-4xl">Teabags</h2>
                    <p className="text-2xl">Enjoy the authentic flavour of Japanese tea anytime, anywhere, quickly and easily.</p>
                </div>
                <div className="max-w-3xl flex-shrink">
                    <img src="\src\assets\shopping\teabags\teabag.webp" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-7 font-laila text-start">
                {items.map(item => (

                    <div key={item._id} className="flex flex-col gap-5 tracking-widest">
                        <Link to={`/collection/teabags/${item._id}`}>
                            <div className="bg-gray-200  border-2 rounded-3xl hover:bg-lime-100 hover:ease-in-out duration-700 cursor-pointer">
                                <img src={item.image} alt="" />
                            </div>
                        </Link>
                        <div className="flex flex-col gap-5">
                            <p className="text-xl text-[#ee9024]">{item.description}</p>
                            <p className="text-2xl">{item.title} {item.weight}</p>
                            <p className="text-2xl font-light">{item.price}€</p>
                            {!isAuthenticated && (
                                <button onClick={() => addToCart(item)} className="px-5 self-start py-3 border rounded-full text-xl text-black hover:bg-lime-200 hover:ease-in-out duration-700">
                                    <i className="fa-solid fa-cart-shopping px-2"></i>Add to cart
                                </button>
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}