import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requester from "../../../api/requester";


export default function RecipeDetails() {

    const { id } = useParams();

    const [item, setItem] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/recipes/${id}`);
                setLoading(false)
                setItem(data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchItems()
    }, [])

  

    if (loading) {
        return (<p>Loading...</p>);
    }


    return (
        <div className="bg-[url('/src/assets/recipe/bg.webp')] p-7 w-2/3 mx-auto flex flex-col justify-center items-center gap-10 border-x-2" >
            <div className="w-1/2">
                <img src={item.image} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-preety leading-loose  gap-10 ">
                <h2 className="text-3xl">{item.title}</h2>
                <p className="text-xl w-1/2  tracking-widest">{item.info}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <div className="w-28 ">
                    <img src="https://global.ippodo-tea.co.jp/cdn/shop/t/6/assets/serve.svg?v=7858435027718967161688182359" alt="" />
                </div>
                <div className="flex text-xl  gap-20">
                    <div>
                        <div>
                            <img src="https://cdn.accentuate.io/559917858967/1640610601331/serve-01-gyokuro100.png?v=0" alt="" />
                        </div>
                        <div>
                            <p>{item.preparing.quantity}</p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="https://cdn.accentuate.io/559917858967/1640610611651/serve-02-gyokuro100.png?v=0" alt="" />
                        </div>
                        <div>
                            <p>{item.preparing.amount}</p>
                        </div>

                    </div>

                    <div>
                        <div>
                            <img src="https://cdn.accentuate.io/559917858967/1640610623071/serve-03-gyokuro100.png?v=0" alt="" />
                        </div>
                        <div>
                            <p>{item.preparing.time}</p>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-2 w-1/2">
                    <div>
                        <img src="https://global.ippodo-tea.co.jp/cdn/shop/t/6/assets/serve-hint.png?v=173255186516599992041688182374" alt="" />
                    </div>
                    <p className="text-xl  tracking-wide">{item.preparing.aditional}</p>
                </div>

            </div>
        </div>
    );
}