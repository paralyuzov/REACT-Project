import Carousel from "./carousel/Carousel";
import MidSection from "./mid-section/MidSection";
import Shopping from "./shopp/Shopping";
import TopFavorites from "./top-favorites/TopFavorites";

export default function Main() {

    return (
        <div>
            <Carousel />
            <TopFavorites />
            <MidSection />
            <Shopping />
        </div>
    )
}