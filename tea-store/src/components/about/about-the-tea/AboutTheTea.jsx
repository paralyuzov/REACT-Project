


export default function AboutTheTea() {


    return (
        <div >
            <div className="flex justify-between items-center border-y-2">
                <h2 className="text-5xl m-auto font-kreon font-light">About the tea</h2>
                <img className="max-w-2xl border-l-2" src="\src\assets\about-the-tea.png" alt="" />
            </div>

            <div className="flex justify-evenly mt-10">
                <div className="flex flex-col gap-5 max-w-[600px] tracking-widest text-lg">
                    <h3 className="text-4xl font-kreon font-light text-start">Where our tea is grown</h3>
                    <p className="text-xl leading-loose text-start">Majko's tea is mainly grown in the hills between the Uji and Kizu River basins in Kyoto, Nara, and Shiga Prefectures that share a common climate and natural environment. Cultivated enveloped in river mist at a high altitude with stark temperature differences between morning and evening, Majko tea is characterized by having a wonderful fragrance and mellow umami flavor.</p>
                    <p className="text-xl leading-loose text-start">Tea fields on steep hillside slopes require a lot of manual labor, including continuous daily care as well as hard work during picking season. The production of high quality tea relies on the devoted efforts and passion of experienced tea growers.</p>
                </div>
                <div className="max-w-64">
                    <img src="\src\assets\about-the-tea2.png" alt="" />
                </div>
            </div>


            <video
                className="w-full bg-black my-20 border-2 aspect-ratio: 16 / 9"
                autoPlay
                loop
            >
                <source src="\src\assets\video.mp4" type="video/mp4" />
            </video>

            <div className="flex justify-evenly mt-20">
                <div className="flex flex-col gap-10 max-w-[600px] tracking-widest text-lg">
                    <h3 className="text-4xl font-kreon font-light text-start">The flavor of Majko tea</h3>
                    <p className="text-xl leading-loose text-start">Majko offers about thirty brands in four tea categories—matcha, gyokuro, sencha, and bancha. Each of our in-house blends is made by procuring different kinds of carefully selected high quality tea leaves and blending them to achieve the taste and fragrance of that brand. Our key job is to maintain the flavor of Majko tea by leveraging our keen eye for selecting tea leaves that live up to the standards of Majko tea flavor and using our blending techniques to produce each brand by mixing different kinds of tea leaves. Majko delivers brands with consistent taste by producing blends based on each brand's flavor, rather than on the season or the tea field. So, when you find your favorite brand at Majko, you can come back to the taste and fragrance that pleases you whenever you like and continue to enjoy it for many years to come, and even pass it down to your children and grandchildren.</p>
                </div>
                <div className="max-w-64">
                    <img src="\src\assets\about-the-tea3.png" alt="" />
                </div>
            </div>

            <div className="flex flex-row-reverse justify-evenly mt-20">
                <div className="flex flex-col gap-10 max-w-[600px] tracking-widest text-lg">
                    <h3 className="text-4xl font-kreon font-light text-start">Producing the right taste</h3>
                    <p className="text-xl leading-loose text-start">Matcha, gyokuro, sencha, and bancha each have very distinctive tastes. Majko provides a range of brands for each category of tea, blending each to have the appropriate strength of taste and fragrance. Within each category of tea, the higher the price, the greater the refined richness, and the lower the price, the lighter the taste. Savor and explore the flavors of refined, rich teas, or enjoy lighter teas that are suitable for many different situations with meals and sweets. There are Majko teas appropriate for virtually any occasion.</p>
                </div>
                <div className="max-w-64">
                    <img src="\src\assets\about-the-tea4.png" alt="" />
                </div>
            </div>

            <div className="flex justify-evenly mt-20">
                <div className="flex flex-col gap-10 max-w-[600px] tracking-widest text-lg">
                    <h3 className="text-4xl font-kreon font-light text-start">Fostering delicious flavor by leveraging the magical effect of time</h3>
                    <p className="text-xl leading-loose text-start">Tea leaves cultivated in the mountains enveloped in river mist have well-developed mesophyll—the inner tissue of the leaf—and wonderful fragrance. We begin the manufacturing process quickly, before the tea leaves lose their delicious natural flavors. The taste of freshly picked tea leaves in May is still very green, immature, and a bit sharp. Majko's approach is to retain the vigor of this taste and fragrance, but mature the leaves to produce a smoother tea. Our wish is for customers to be able to fully appreciate the rich, delicious taste of freshly made tea using tea leaves that have flavor with depth and complexity that has been nurtured over time.</p>
                </div>
                <div className="max-w-64">
                    <img src="\src\assets\about-the-tea5.png" alt="" />
                </div>
            </div>

            <div className="flex flex-row-reverse justify-evenly m-20 border-b-2">
                <div className="flex flex-col gap-10 max-w-[600px] tracking-widest text-lg">
                    <h3 className="text-4xl font-kreon font-light text-start">The power of tea leaves and the relationship between water temperature and taste</h3>
                    <p className="text-xl leading-loose text-start">When you prepare Japanese tea in a kyusu, pouring hot water over fresh tea leaves, letting it brew, and then serving it into teacups, that’s just the first pot. What some people don't realize is that you can repeat the cycle, and reuse the same tea leaves to prepare more pots. The first pot is replete with sweetness, umami and fragrance. The second is milder. The third is very light. The fact that you can prepare multiple pots by reusing the same tea leaves reflects the power that Japanese tea possesses.</p>
                    <p className="text-xl leading-loose text-start pb-10">You can also produce different tastes with the same brand of tea, in addition to its standard taste, by adjusting the water temperature used during brewing. Raising the water temperature produces a lighter taste, while a lower water temperature gives the tea a smoother, more well-rounded flavor. Each tea brand is created using a blend of different kinds of tea leaves, so adjusting the water temperature allows you to bring out and savor different aspects of the tea's character. Use this knowledge to fully appreciate the power that resides in Majko tea.</p>
                </div>
                <div className="max-w-64">
                    <img src="\src\assets\about-the-tea4.png" alt="" />
                </div>
            </div>
            
        </div>
    );
}