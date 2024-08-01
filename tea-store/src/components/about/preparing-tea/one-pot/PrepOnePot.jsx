

export default function PrepOnePot() {

    return (
        <div className="flex flex-col justify-center gap-10 items-center">
            <div className="flex flex-col gap-5 pb-10 border-b-2 mt-10 font-kreon w-full">
                <h3 className="text-3xl text-yellow-600">Ready to save you when help is needed.</h3>
                <p className="text-xl">A great ally at busy times.</p>
            </div>
            <div className="mt-10">
                <div className="pb-20">
                    <h3 className="text-5xl">One-Pot Teabag</h3>
                </div>
                <div className="flex justify-center items-center max-w-3xl text-2xl border-2 rounded-xl p-8 font-laila">
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-brands fa-envira"></i>1 bag</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-mug-saucer"></i>300ml</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-temperature-three-quarters"></i>boiling hot water</p>
                    <p className="px-5 flex justify-center items-center gap-2"><i className="fa-regular fa-clock"></i>2 min.</p>
                </div>
            </div>

            <div className="grid grid-rows3 gap-10">

                <div className="flex items-center gap-5 ">
                    <div className="max-w-[200px]">
                        <img src="\src\assets\prep\one-pot\one-pot.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start"> <strong>Gyokuro</strong> ,<strong>sencha</strong> ,<strong>genmaicha</strong> , <strong> hojicha:</strong> <br /> Boiling hot water, 300ml, 2 min. <br /> (with chilled water: 300ml, 20 min.)</p>
                </div>

            </div>
        </div>
    );
}