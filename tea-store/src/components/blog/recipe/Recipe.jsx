import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requester from "../../../api/requester";

export default function Recipe() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/recipes`);
                setItems(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems()
    }, [])

  
    return (
        <div className="bg-[url('/src/assets/recipe/bg.webp')] p-7">
            <div className="flex justify-center items-center gap-20">
                <div>
                    <h1 className="text-5xl w-28 border-2 p-20 bg-gray-100">食卓ノート</h1>
                </div>
                <div className="max-w-lg flex flex-col gap-5 font-kreon">
                    <h2 className="text-3xl">Food pairing pointers</h2>
                    <p className="text-pretty text-start text-xl">Here we feature Japanese tea paired with cuisine and confections that are popular in Japanese households, along with instructions on how to prepare the tea. Our aim, as always, is to help you make the most of Japanese tea.</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10 my-20 font-laila">

                {items.map(item => (

                    <div key={item._id} className="border-2 rounded-xl border-black">
                        <Link to={`/blog/recipe/${item._id}`}>
                            <div className="hover:scale-110">
                                <img src={item.image} alt="" />
                            </div>
                        </Link>
                        <div className=" text-xl p-10">
                            <p>{item.title}</p>
                        </div>
                    </div>

                ))}

            </div>
        </div >
    );
}

