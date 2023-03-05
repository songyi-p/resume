import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface VelogDataType {
    address : string
    alt : string
}

const GridSlider = () => {
    const velogData = require('/public/data/velog_data.json');

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint : 767,
                settings: {
                    dots: false,
                }
            }
        ]
    };

    return (
        <div className="item-e">
            <Slider className='relative' {...settings}>
                {
                    velogData?.map((data : VelogDataType, i : number)=>
                        {return (
                            <a href={data.address} key={data.alt}>
                                <Image
                                    src={`/images/velog_${i+1}.png`}
                                    alt={data.alt}
                                    width="600"
                                    height="400"
                                    className="object-fill hover:scale-[1.02] cursor-pointer"
                                />
                            </a>
                        )}
                    )
                }
            </Slider>
        </div>
    )
}

export default GridSlider