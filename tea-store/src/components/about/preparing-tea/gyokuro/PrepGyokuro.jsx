
export default function PrepGyokuro() {

    return (


        <div  className="flex flex-col justify-center gap-10 items-center">
            <div className="flex flex-col gap-5 pb-10 border-b-2 mt-10 font-kreon w-full">
                <h3 className="text-3xl text-yellow-600">Powerful punch of umami</h3>
                <p className="text-xl">The concentrated umami can feel as though it had been squeezed out of freshly-picked tea <br></br> leaves. To get all the umami, make sure to cool the water sufficiently after boiling.</p>
            </div>
            <div className="mt-10">
                <div className="pb-20">
                    <h3 className="text-5xl">Basic Gyokuro</h3>
                </div>
                <div className="flex justify-center items-center max-w-2xl text-2xl border-2 rounded-xl p-8 font-laila">
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-brands fa-envira"></i>10g</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-mug-saucer"></i>80ml</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-temperature-three-quarters"></i>60℃</p>
                    <p className="px-5 flex justify-center items-center gap-2"><i className="fa-regular fa-clock"></i>90 sec.</p>
                </div>
            </div>

            <div className="grid grid-rows3 gap-10">

                <div className="flex items-center gap-5">
                    <div className="max-w-[200px]">
                        <img src="\src\assets\prep\gyokuro\gyokuro1.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">Use 10g of leaves (2 tablespoons)</p>
                </div>

                <div className="flex items-center gap-5 ">
                    <div className="max-w-[200px] ">
                        <img src="\src\assets\prep\gyokuro\gyokuro2.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">Add 80ml of hot water (60°C)</p>
                </div>

                <div className="flex items-center gap-5">
                    <div className="max-w-[200px]" >
                        <img src="\src\assets\prep\gyokuro\gyokuro3.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">Serve 90 seconds after beginning to pour the hot water.</p>
                </div>

            </div>
        </div>

    );
}