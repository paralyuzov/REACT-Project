import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import requester from "../../../api/requester";


export default function Story() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/story`);
                setItems(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems()
    }, [])


    return (
        <div>
            <div className="flex justify-center items-center gap-32 p-5 leading-loose font-kreon">
                <div className="flex flex-col justify-center items-center gap-20 w-2/3">
                    <h2 className="text-4xl ">Different ways to enjoy Japanese tea</h2>
                    <p className="text-xl">Asking people who like MAJKO products about Japanese tea reveals all sorts of different ways to enjoy it. Recent posts include interviews with three people about specific topics.</p>
                </div>
                <div className="w-1/2">
                    <img src="\src\assets\story\story.webp" alt="" />
                </div>
            </div>

            <div className="bg-yellow-200">
                <div className="flex justify-between items-center gap-10 p-10">
                    {items.map(item => (
                        <div key={item._id}>
                            <Link to={`/blog/story/${item._id}`}>
                                <div className="flex flex-col justify-center items-center border-2 border-black bg-white hover:scale-105">
                                    <div>
                                        <img src={item.story.image} alt="" />
                                    </div>
                                    <p className="mt-10 text-2xl underline">Stories from Majko staff</p>
                                    <p className="my-5 text-xl w-1/2">{item.story.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>

            </div>


        </div>
    );
}