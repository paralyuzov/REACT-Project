import { Link } from "react-router-dom";



export default function Preparing() {


    return (
        <div className="border-b-2">
            <div className="flex justify-between items-center border-y-2">
                <div className="flex flex-col mx-auto gap-10">
                    <h2 className="text-5xl font-kreon">Preparing Tea</h2>
                    <p className="text-2xl font-laila">Every tea has a range of characteristics,<br />and more than one way to enjoy it.</p>
                </div>
                <div className="max-w-2xl">
                    <img src="\src\assets\preparing.png" alt="" />
                </div>
            </div>
            <div className="max-w-2xl mx-auto mt-10">
                <p className="text-2xl leading-loose text-start font-laila">There are many different ways of preparing Japanese green tea. Enrich your life by learning a few practical techniques, from the basic techniques for preparing teas to bring out their distinctive characteristics, to techniques for producing your preferred flavours and teas for specific purposes. To get the hang of preparing tea however you like it, begin by simply enjoying the process of preparing tea.</p>
            </div>

            <div className="my-10">
                <h2 className="text-5xl font-kreon py-20">Learn how to prepare...</h2>
                <div className="grid grid-cols-3 gap-10 font-laila text-xl leading-loose">
                    <Link to="/preparing-tea/matcha">
                        <div className="flex flex-col justify-between items-center gap-5 hover:scale-105 cursor-pointer">
                            <div>
                                <img src="\src\assets\types-matcha.png" alt="" />
                            </div>
                            <h3 className="text-3xl">Matcha, Uji-Shimizu</h3>
                        </div>
                    </Link>
                    <Link to="/preparing-tea/gyokuro">
                        <div className="flex flex-col justify-between items-center gap-5 hover:scale-105 cursor-pointer">
                            <div>
                                <img src="\src\assets\types-gyokuro.png" alt="" />
                            </div>
                            <h3 className="text-3xl">Gyokuro</h3>
                        </div>
                    </Link>

                    <Link to="/preparing-tea/sencha">
                        <div className="flex flex-col justify-between items-center gap-5 hover:scale-105 cursor-pointer">
                            <div>
                                <img src="\src\assets\types-sencha.png" alt="" />
                            </div>
                            <h3 className="text-3xl">Sencha</h3>
                        </div>
                    </Link>

                    <Link to="/preparing-tea/hojicha">
                        <div className="flex flex-col justify-between items-center gap-5 hover:scale-105 cursor-pointer">
                            <div>
                                <img src="\src\assets\types-hojicha.png" alt="" />
                            </div>
                            <h3 className="text-3xl">Hojicha, Genmaicha</h3>
                        </div>
                    </Link>

                    <Link to="/preparing-tea/one-cup-teabags">
                        <div className="flex flex-col justify-between items-center gap-5 hover:scale-105 cursor-pointer">
                            <div>
                                <img src="\src\assets\types-teabag.png" alt="" />
                            </div>
                            <h3 className="text-3xl">One-Cup Teabags</h3>
                        </div>
                    </Link>

                    <Link to="/preparing-tea/one-pot-teabags">
                        <div className="flex flex-col justify-between items-center gap-5 hover:scale-105 cursor-pointer">
                            <div>
                                <img src="\src\assets\types-one-pot.png" alt="" />
                            </div>
                            <h3 className="text-3xl">One-Pot Teabag</h3>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}