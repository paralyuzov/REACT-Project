

export default function PrepOneCup() {


    return (
        <div className="flex flex-col justify-center gap-10 items-center">
            <div className="flex flex-col gap-5 pb-10 border-b-2 mt-10 font-kreon w-full">
                <h3 className="text-3xl text-yellow-600">More professional than preparing tea in a kyusu?</h3>
                <p className="text-xl">Teabags that a traditional merchant of leaf tea is proud to recommend.</p>
            </div>
            <div className="mt-10">
                <div className="pb-20">
                    <h3 className="text-5xl">One-Cup Teabag</h3>
                </div>
                <div className="flex justify-center items-center max-w-2xl text-2xl border-2 rounded-xl p-8 font-laila">
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-brands fa-envira"></i>1 bag</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-mug-saucer"></i>150ml</p>
                    <p className="border-r-2 border-black px-5 flex justify-center items-center gap-2"><i className="fa-solid fa-temperature-three-quarters"></i>hot water</p>
                    <p className="px-5 flex justify-center items-center gap-2"><i className="fa-regular fa-clock"></i>90 sec.</p>
                </div>
            </div>

            <div className="grid grid-rows3 gap-10">

                <div className="flex items-center gap-5 ">
                    <div className="max-w-[200px]">
                        <img src="\src\assets\prep\one-bag\one-bag.png" alt="" />
                    </div>
                    <p className="text-xl leading-loose text-start">For gyokuro and sencha, pour on hot water just off the boil (150ml), <br /> and brew for 90 seconds.
                        <br /> For hojicha, pour on 150ml of boiling hot water and brew for 60 seconds.</p>
                </div>

            </div>
        </div>
    );
}