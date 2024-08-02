import { useFavorites } from "../../contexts/FavoritesContext";
import { Link } from "react-router-dom";

export default function Favorites() {

    const { favorites, removeFavorite } = useFavorites();
    return (
        <div>
            <h2 className="text-3xl font-kreon my-10">Your favorite items</h2>
            {favorites.length === 0 ? (
                <p className="text-2xl">You have no favorite items yet.</p>
            ) : (
                <div className="grid grid-cols-4 gap-7 font-laila text-start">
                    {favorites.map(item => (
                        <div key={item._id} className="flex flex-col gap-5 tracking-widest">
                            <Link to={`/collection/${item.type}/${item._id}`}>
                                <div className="bg-gray-200  border-2 rounded-3xl hover:bg-lime-100 hover:ease-in-out duration-700 cursor-pointer">
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            <div className="flex flex-col justify-center items-center gap-5">
                                <p className="text-xl text-[#ee9024]">{item.description}</p>
                                <p className="text-2xl">{item.title} {item.weight}g</p>
                                <button onClick={() => removeFavorite(item._id)} className="px-5   border rounded-full text-xl text-black">Remove</button>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );

}