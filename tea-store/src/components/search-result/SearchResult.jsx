import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import requester from "../../api/requester";

export default function SearchResult() {

    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('q');

    useEffect(() => {
        const searchItems = async () => {
            if (query) {
                try {
                    const data = await requester.get(`http://localhost:3030/api/search?q=${query}`);
                    setSearchResults(data);
                } catch (err) {
                    console.log(err);
                }
            }

        };

        searchItems()
    }, [query])

    
    return (
        <div className="p-4">
            <h2 className="text-2xl mb-4">Search Results</h2>
            {searchResults.length === 0 ? (
                <p>No results found for "{query}".</p>
            ) : (
                <div className="grid grid-cols-4 gap-7 font-laila text-start">
                    {searchResults.map(item => (

                        <div key={item._id} className="flex flex-col gap-5 tracking-widest">
                            <Link to={`/collection/${item.type}/${item._id}`}>
                                <div className="bg-gray-200  border-2 rounded-3xl hover:bg-lime-100 hover:ease-in-out duration-700 cursor-pointer">
                                    <img src={item.image} alt="" />
                                </div>
                            </Link>
                            <div className="flex flex-col gap-5">
                                <p className="text-xl text-[#ee9024]">{item.description}</p>
                                <p className="text-2xl">{item.title} {item.weight}g</p>
                                <p className="text-2xl font-light">{item.price}€</p>
                            </div>
                        </div>
                    ))}

                </div>
            )}
        </div>
    );

}