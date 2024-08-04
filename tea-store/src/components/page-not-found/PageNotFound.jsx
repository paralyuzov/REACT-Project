import { Link } from "react-router-dom";

export default function PageNotFound() {

    return (
        <div>
            <div className="flex flex-col justify-center items-center my-20 gap-5">
                <div>
                    <img src="\src\assets\404.webp" alt="" />
                </div>
                <div className="w-1/4 text-xl flex flex-col gap-10">
                    <p className="font-bold">PAGE NOT FOUND</p>
                    <p>The page you are looking for may have been temporarily inaccessible, moved or deleted.</p>
                    <Link to={"/"}><span className="font-bold bg-lime-300 px-3 py-5 rounded-3xl text-base hover:bg-lime-400">RETURN TO HOME PAGE</span></Link>
                </div>
            </div>
        </div >
    );

}