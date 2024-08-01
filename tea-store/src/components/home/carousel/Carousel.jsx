export default function Carousel() {
    return (
        <div className="w-full max-w-full mh-auto mx-auto carousel">
            <div className="carousel-inner">
                <div className="carousel-item">
                    <div className="aspect-w-16 aspect-h-9 w-full">
                        <img
                            src="\src\assets\image1.jpg"
                            alt="Image 1"
                            className="w-full h-auto object-cover saturate-150"
                        />
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="aspect-w-16 aspect-h-9 w-full">
                        <img
                            src="\src\assets\image2.jpg"
                            alt="Image 2"
                            className="w-full h-auto object-cover saturate-150"
                        />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="aspect-w-16 aspect-h-9 w-full">
                        <img
                            src="\src\assets\image3.jpg"
                            alt="Image 3"
                            className="w-full h-auto object-cover saturate-150"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}