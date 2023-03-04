import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const GridSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false, //화살표 (양옆 버튼) 구현할 것인지
        autoplay: true, //자동 재생 할 것인지
        autoplaySpeed: 2000,
        slidesToShow: 1, // 한번에 몇개 슬라이드 보여줄 것인지
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
                    ['리팩토링 회고', '2023 신년계획', '백오피스 TS 전환기', '브런치 회고', '1차프로젝트 회고', 'kukka 회고'].map((el, i)=>
                        {return (
                            <a href="https://velog.io/@songyi7091" key={el}>
                                <Image
                                    src={`/images/velog_${i+1}.png`}
                                    alt={el}
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