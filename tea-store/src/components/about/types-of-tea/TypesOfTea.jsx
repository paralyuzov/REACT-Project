import { Link } from 'react-router-dom'


export default function TypesOfTea() {


    return (
        <div >
            <div className="text-8xl p-52 font-kreon border-y-2">
                <h2>Types of Tea</h2>
            </div>

            <div className="grid grid-cols-3 gap-5 font-laila text-xl leading-loose">

                <div className="flex flex-col justify-between items-center gap-5">
                    <div>
                        <img src="\src\assets\types-matcha.png" alt="" />
                    </div>
                    <h3 className="text-3xl">Matcha, Uji-Shimizu</h3>
                    <p>Produced by using a stone mill to grind tea leaves packed with umami flavor into a fine powder, matcha is characterized by a natural vibrant green color, prominent fragrance, and smooth, rich flavor. Uji-Shimizu (sweetened matcha) blends matcha's flavor with the sweetness of granulated sugar. Matcha can be enjoyed as koicha, usucha, matcha latte, and many other ways.</p>
                    <div className="flex justify-center gap-10">
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/collection/matcha"}>Products</Link>
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/preparing-tea/matcha"}>Preparing Tea</Link>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center gap-5">
                    <div>
                        <img src="\src\assets\types-gyokuro.png" alt="" />
                    </div>
                    <h3 className="text-3xl">Gyokuro</h3>
                    <p>Gyokuro has a distinctive fragrance and sweetness, and a soothing umami flavor that stays with you, allowing you to savor it slowly. It's best savored slowly while relaxing.</p>
                    <p>Enjoy preparing it with different temperatures of water—boiling hot water, chilled water, or anything in between.</p>
                    <div className="flex justify-center  gap-10">
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/collection/gyokuro"}>Products</Link>
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/preparing-tea/gyokuro"}>Preparing Tea</Link>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center gap-5">
                    <div>
                        <img src="\src\assets\types-sencha.png" alt="" />
                    </div>
                    <h3 className="text-3xl">Sencha</h3>
                    <p>Sencha has just the right amount of sharpness and sweetness, as well as a pleasant, refreshing aftertaste. It's the quintessential everyday Japanese green tea that can be enjoyed on any occasion—as a morning pick-me-up, after a meal, or with a snack. Enjoy preparing it with different temperatures of water—boiling hot water, chilled water, or anything in between.</p>
                    <div className="flex justify-center  gap-10">
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/collection/sencha"}>Products</Link>
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/preparing-tea/sencha"}>Preparing Tea</Link>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center gap-5">
                    <div>
                        <img src="\src\assets\types-hojicha.png" alt="" />
                    </div>
                    <h3 className="text-3xl">Hojicha, Genmaicha</h3>
                    <p>Hojicha and genmaicha have light, refreshing tastes. When you pour boiling hot water over hojicha, a wonderful roasted aroma fills the air. Genmaicha possesses the mild, pleasant aroma of roasted rice. Both are great for regular, daily consumption. Hojicha is particularly well-suited to being carried around in your travel flask while out and about.</p>
                    <div className="flex justify-center  gap-10">
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/collection/hojicha"}>Products</Link>
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/preparing-tea/hojicha"}>Preparing Tea</Link>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center gap-5">
                    <div>
                        <img src="\src\assets\types-teabag.png" alt="" />
                    </div>
                    <h3 className="text-3xl">One-Cup Teabags</h3>
                    <p>One-Cup Teabags are packed with the shoots and buds that are left over from the tea manufacturing process. The roundish little clumps have a slightly bitter taste with lots of umami. One-Cup Teabags come in three flavors, gyokuro, sencha, and hojicha, and come in very handy on the road, at the office, or when you're running late in the morning.</p>
                    <div className="flex justify-center  gap-10">
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/collection/teabag"}>Products</Link>
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/preparing-tea/one-cup-teabags"}>Preparing Tea</Link>
                    </div>
                </div>

                <div className="flex flex-col justify-between items-center gap-5">
                    <div>
                        <img src="\src\assets\types-one-pot.png" alt="" />
                    </div>
                    <h3 className="text-3xl">One-Pot Teabag</h3>
                    <p>(for making large batches of tea)</p>
                    <p>One-Cup Teabags are packed with the shoots and buds that are left over from the tea manufacturing process. The roundish little clumps have a slightly bitter taste with lots of umami. One-Cup Teabags come in three flavors, gyokuro, sencha, and hojicha, and come in very handy on the road, at the office, or when you're running late in the morning.</p>
                    <div className="flex justify-center  gap-10">
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/collection/teabag"}>Products</Link>
                        <Link className="px-5 py-2 bg-lime-200 rounded-3xl hover:bg-lime-300" to={"/preparing-tea/one-pot-teabags"}>Preparing Tea</Link>
                    </div>
                </div>

            </div>
            
        </div>
    );
}