import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import requester from "../../../api/requester";
import Spinner from "../../../shared/Spinner";


export default function StoryDetails() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [item, setItem] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await requester.get(`http://localhost:3030/api/collection/story/${id}`)
                setLoading(false);
                setItem(data);
            } catch (error) {
                if (err.message == "Invalid ID") {
                    navigate('/page-not-found');
                }
            }
        }

        fetchItem()
    }, [])

    if (loading) {
        return (<Spinner />);
    }

    return (
        <div className="flex flex-col justify-center items-center p-10 bg-yellow-200 text-xl font-laila">
            <div className="flex flex-col justify-center items-center ">
                <div>
                    <h2 className="text-3xl underline underline-offset-2">Different ways to enjoy Japanese tea</h2>
                </div>

                <div className="text-4xl my-10">
                    <h2>{item.story.title}</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-10 border-2 border-black rounded-2xl bg-white p-5">
                    <div className="flex w-1/2 justify-center items-center gap-10">
                        <div className="flex flex-col gap-5">
                            <p>{item.story.aditional.head.area}</p>
                            <p>{item.story.aditional.head.info}</p>
                        </div>
                        <div className="relative top-50 left-48 w-full">
                            <img src={item.story.aditional.head.image} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5 w-1/2">
                        <h2 className="text-2xl">How do you enjoy it?</h2>
                        <p>{item.story.aditional.enjoy.info}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 w-1/2">
                        <h2 className="text-2xl">How do you prepare it?</h2>
                        <p>{item.story.aditional.prepare.info}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}