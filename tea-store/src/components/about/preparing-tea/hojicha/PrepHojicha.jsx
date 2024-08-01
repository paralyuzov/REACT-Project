
export default function PrepHojicha() {

    return (
        <div className="flex flex-col justify-center gap-10 items-center">
            <div className="flex flex-col gap-5 pb-10 border-b-2 mt-10 font-kreon w-full">
                <h3 className="text-3xl text-yellow-600">Aroma helps you to relax.</h3>
                <p className="text-xl">To be sure of getting the full aroma, use hot water that is boiling vigorously.</p>
            </div>
            <div className="mt-10">
                <div className="pb-20">
                    <h3 className="text-5xl">Basic Bancha (Hojicha, Genmaicha, etc.)</h3>
                </div>
                <div className="flex justify-center items-center max-w-2xl text-2xl border-2 rounded-xl p-8 font-laila">
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-brands fa-envira"></i>10g</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-mug-saucer"></i>240ml</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-temperature-three-quarters"></i>100℃</p>
                    <p className="px-5 flex justify-center items-center gap-2"><i className="fa-regular fa-clock"></i>30 sec.</p>
                </div>
            </div>

            <div className="grid grid-rows3 gap-10">

                <div className="flex items-center gap-5">
                    <div className="max-w-[200px]">
                        <img src="\src\assets\prep\hojicha\hojicha1.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">Use 10g of leaves (hojicha: 4 tablespoons, genmaicha: 2 tablespoons)</p>
                </div>

                <div className="flex items-center gap-5 ">
                    <div className="max-w-[200px]">
                        <img src="\src\assets\prep\hojicha\hojicha2.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">Add 240ml of hot water (100°C)</p>
                </div>

                <div className="flex items-center gap-5">
                    <div className="max-w-[200px]" >
                        <img src="\src\assets\prep\hojicha\hojicha3.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">Serve 30 seconds after beginning to pour the hot water.</p>
                </div>

            </div>
        </div>
    );
}