import React, { useLayoutEffect, useState } from "react";
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
interface ISlide {
  filterName: string;
  setCoverImage: (coverImage: string) => void;
}

const CardSlide: React.FC<ISlide> = ({ filterName, setCoverImage }) => {
  const [cardsMoviesData, setCardsMoviesData] = useState([]);
  useLayoutEffect(() => {
    if (!filterName) {
      setCardsMoviesData(cardsMoviesDataJson["TendingNow"]);
    } else if (filterName) {
      const filterData = cardsMoviesDataJson["TendingNow"].filter(
        (item) => item.Category == filterName.slice(0, -1)
      );
      setCardsMoviesData(filterData);
      if (filterData.length < 1) {
        setCardsMoviesData(cardsMoviesDataJson["TendingNow"]);
      }
    }
  }, [filterName]);
  const handleClickFilm = (filmItem: any) => {
    setCoverImage(filmItem.CoverImage);
    sessionStorage.setItem("film", JSON.stringify(filmItem));
  };
  return (
    <div className="container-card">
      <DynamicText component="p" text="Trending Now" />
      <Swiper
        slidesPerView={6}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {cardsMoviesData?.map((item: any, index: number) => {
          return (
            <SwiperSlide tabIndex={index}
           >
              <div style={{cursor: "pointer"}} onClick={() => handleClickFilm(item)} key={index}>
                <img
                  src={`${https_specials[index]}`}
                  alt={item.Title}
                  title={item.Description}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CardSlide;
