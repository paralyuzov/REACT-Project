import { Link } from "react-router-dom";

export default function Shopping() {
    return (
        <div>
            <div>
                <img src="\src\assets\shopping.jpg" alt="" />
            </div>
            <div className="flex">
                <h2 className="text-5xl px-5 py-20 border-2 border-black">買う</h2>
                <div className="flex flex-col justify-start items-start ml-20 gap-10">
                    <h2 className="text-5xl font-light">Shopping</h2>
                    <p className="w-[500px] text-2xl font-light">For generations, we have upheld a tradition of aromatic, well-balanced teas by carefully selecting, blending, and crafting each of our 40+ brands.</p>
                </div>
            </div>
            <div className="flex gap-20 justify-center items-start flex-wrap mt-20">
                <Link to={"/collection/matcha"}>
                    <div className="flex flex-col gap-3 hover:scale-105 hover:text-[#b59654]">
                        <div>
                            <img src="\src\assets\category1.png" alt="" />
                        </div>
                        <p className="font-bold text-xl">Matcha,Uji-Shimizu</p>
                    </div>
                </Link>

                <Link to={"/collection/gyokuro"}>
                    <div className="flex flex-col gap-5 hover:scale-105 hover:text-[#b59654]">
                        <div>
                            <img src="\src\assets\category8.png" alt="" />
                        </div>
                        <p className="font-bold text-xl">Gyokuro</p>
                    </div>
                </Link>

                <Link to={"/collection/sencha"}>
                    <div className="flex flex-col gap-5 hover:scale-105 hover:text-[#b59654]">
                        <div>
                            <img src="\src\assets\category7.png" alt="" />
                        </div>
                        <p className="font-bold text-xl">Sencha</p>
                    </div>
                </Link>

                <Link to={"/collection/hojicha"}>
                    <div className="flex flex-col gap-5 hover:scale-105 hover:text-[#b59654]">
                        <div>
                            <img src="\src\assets\category6.png" alt="" />
                        </div>
                        <p className="font-bold text-xl">Hojicha,Genmaicha</p>
                    </div>
                </Link>

                <Link to={"/collection/teabag"}>
                    <div className="flex flex-col gap-5 hover:scale-105 hover:text-[#b59654]">
                        <div>
                            <img src="\src\assets\category5.png" alt="" />
                        </div>
                        <p className="font-bold text-xl">Teabags</p>
                    </div>
                </Link>

                <Link to={"/collection/organic"}>
                    <div className="flex flex-col gap-5 hover:scale-105 hover:text-[#b59654]">
                        <div>
                            <img src="\src\assets\category4.png" alt="" />
                        </div>
                        <p className="font-bold text-xl">Organic</p>
                    </div>
                </Link>

                <Link to={"/collection/utensils"}>
                    <div className="flex flex-col gap-5 hover:scale-105 hover:text-[#b59654]">
                        <div>
                            <img src="\src\assets\category3.png" alt="" />
                        </div>
                        <p className="font-bold text-xl">Utensils</p>
                    </div>
                </Link>

            </div>


        </div>
    );
}