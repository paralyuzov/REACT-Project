import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../../contexts/CartContext";

export default function ShopGyokuro() {

    const { addToCart } = useCart();
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3030/api/collection/gyokuro')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center font-kreon border-b-2 mb-5">
                <div className="flex flex-col justify-center items-center gap-10">
                    <h2 className="text-4xl">Gyokuro</h2>
                    <p className="text-2xl">Treat yourself to an elegant experience
                        with natural sweetness.</p>
                </div>
                <div className="max-w-3xl flex-shrink">
                    <img src="\src\assets\shopping\gyokuro\gyokuro.webp" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-7 font-laila text-start">
                {items.map(item => (

                    <div key={item._id} className="flex flex-col gap-5 tracking-widest">
                        <Link to={`/collection/gyokuro/${item._id}`}>
                            <div className="bg-gray-200  border-2 rounded-3xl hover:bg-lime-100 hover:ease-in-out duration-700 cursor-pointer">
                                <img src={item.image} alt="" />
                            </div>
                        </Link>
                        <div className="flex flex-col gap-5">
                            <p className="text-xl text-[#ee9024]">{item.description}</p>
                            <p className="text-2xl">{item.title} {item.weight}g</p>
                            <p className="text-2xl font-light">{item.price}€</p>
                            <button onClick={() => addToCart(item)} className="px-5 self-start py-3 border rounded-full text-xl text-black hover:bg-lime-200 hover:ease-in-out duration-700"><i className="fa-solid fa-cart-shopping px-2"></i>Add to cart</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}