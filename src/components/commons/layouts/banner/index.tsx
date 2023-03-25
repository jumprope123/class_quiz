import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerWrapper = styled.div`
    /* height: 260px; */
    background-color: pink;
    margin-bottom: -10px;
`;

const SliderDiv = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        height: 100%;
        margin: auto;
    }
`;

const SliderComponent = styled(Slider)`
    margin-left: 100px;
    margin-right: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .slick-dots li button:before {
        color: white;
    }
`;

const BannerImg = styled.img``;

export default function LayoutBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots: number) => (
            <div
                style={{
                    padding: "40px",
                    zIndex: "1",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
    };

    return (
        <>
            <BannerWrapper>
                <SliderComponent {...settings}>
                    <SliderDiv>
                        <BannerImg src="/images/bannerImg1.png" />
                    </SliderDiv>
                    <SliderDiv>
                        <BannerImg src="/images/bannerImg2.png" />
                    </SliderDiv>
                    <SliderDiv>{/* <BannerImg src="/images/bannerImg3.png" /> */}</SliderDiv>
                    <SliderDiv>
                        <h3>4</h3>
                    </SliderDiv>
                    <SliderDiv>
                        <h3>5</h3>
                    </SliderDiv>
                    <SliderDiv>
                        <h3>6</h3>
                    </SliderDiv>
                </SliderComponent>
            </BannerWrapper>
        </>
    );
}
