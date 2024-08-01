

export default function PrepMatcha() {

    return (
        <div className="flex flex-col justify-center gap-10 items-center">
            <div className="flex flex-col gap-5 pb-10 border-b-2 mt-10 font-kreon w-full">
                <h3 className="text-3xl text-yellow-600">Luxurious time in the kitchen</h3>
                <p className="text-xl">Preparing the usucha quickly is the secret to enjoying the full fragrance.</p>
            </div>
            <div className="mt-10">
                <div className="pb-20">
                    <h3 className="text-5xl">Basic Usucha (Matcha)</h3>
                </div>
                <div className="flex justify-center items-center max-w-2xl text-2xl border-2 rounded-xl p-8 font-laila">
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-brands fa-envira"></i>2g</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-mug-saucer"></i>60ml</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-temperature-three-quarters"></i>80℃</p>
                    <p className="px-5 flex justify-center items-center gap-2"><i className="fa-regular fa-clock"></i>15 sec.</p>
                </div>
            </div>

            <div className="grid grid-rows3 gap-10">

                <div className="flex items-center gap-5">
                    <div className="max-w-[200px]">
                        <img src="\src\assets\prep\matcha\matcha1.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">Sift 2g of matcha (1.5 heaped tea ladles or 1 level teaspoon)</p>
                </div>

                <div className="flex items-center gap-5 ">
                    <div className="max-w-[200px]">
                        <img src="\src\assets\prep\matcha\matcha2.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">Add 60ml of hot water (80°C)</p>
                </div>

                <div className="flex items-center gap-5">
                    <div className="max-w-[200px]" >
                        <img src="\src\assets\prep\matcha\matcha3.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">Whisk vigorously for 15 seconds</p>
                </div>

            </div>
        </div>
    );
}