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
        centerMode: false,
        pauseOnHover: false
    };

    return (
        <div className="item-e">
            <Slider className='item-e relative' {...settings}>
                {
                    ['리팩토링 회고', '2023 신년계획', '백오피스 TS 전환기', '브런치 회고', '1차프로젝트 회고', 'kukka 회고'].map((el, i)=>
                        {return (
                            <Image
                                key={el}
                                src={`/images/velog_${i+1}.png`}
                                alt={el}
                                width="350"
                                height="250"
                                className="object-fill"
                            />
                        )}
                    )
                }
            </Slider>
        </div>
    )
}

export default GridSlider