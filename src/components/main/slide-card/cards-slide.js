import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import https_specials_1 from "../../../assets/https_specials-1.png";
import https_specials_2 from "../../../assets/https_specials-2.png";
import https_specials_3 from "../../../assets/https_specials-3.png";
import https_specials_4 from "../../../assets/https_specials-4.png";
import https_specials_5 from "../../../assets/https_specials-5.png";
import https_specials_6 from "../../../assets/https_specials-6.png";
import https_specials_7 from "../../../assets/https_specials-7.png";
import https_specials_8 from "../../../assets/https_specials-8.png";
import cardsMoviesDataJson from "../../../utils/data.json";
// Import Swiper styles
import DynamicText from "@/components/dynamic/paragraph";
import "swiper/css";
import "swiper/css/pagination";
export const https_specials = [
    https_specials_1,
    https_specials_2,
    https_specials_3,
    https_specials_4,
    https_specials_5,
    https_specials_6,
    https_specials_7,
    https_specials_8,
];
const CardSlide = ({ filterName, setCoverImage }) => {
    const [cardsMoviesData, setCardsMoviesData] = useState([]);
    useLayoutEffect(() => {
        if (!filterName) {
            setCardsMoviesData(cardsMoviesDataJson["TendingNow"]);
        }
        else if (filterName) {
            const filterData = cardsMoviesDataJson["TendingNow"].filter((item) => item.Category == filterName.slice(0, -1));
            setCardsMoviesData(filterData);
            if (filterData.length < 1) {
                setCardsMoviesData(cardsMoviesDataJson["TendingNow"]);
            }
        }
    }, [filterName]);
    const handleClickFilm = (filmItem) => {
        setCoverImage(filmItem.CoverImage);
        sessionStorage.setItem("film", JSON.stringify(filmItem));
    };
    return (_jsxs("div", { className: "container-card", children: [_jsx(DynamicText, { component: "p", text: "Trending Now" }), _jsx(Swiper, { slidesPerView: 6, spaceBetween: 16, pagination: {
                    clickable: true,
                }, className: "mySwiper", children: cardsMoviesData?.map((item, index) => {
                    return (_jsx(SwiperSlide, { tabIndex: index, children: _jsx("div", { style: { cursor: "pointer" }, onClick: () => handleClickFilm(item), children: _jsx("img", { src: `${https_specials[index]}`, alt: item.Title, title: item.Description }) }, index) }));
                }) })] }));
};
export default CardSlide;
