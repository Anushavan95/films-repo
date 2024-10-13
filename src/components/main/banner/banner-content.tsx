import React, {
  useCallback,
  useEffect, useState
} from "react";
import bannerData from "../../../utils/data.json";

import FeaturedTitleImage from "@/assets/FeaturedTitleImage.png";
import styles from "./banner.module.scss";

import { Play } from "@/assets/svg/play";
import Button from "@/components/dynamic/button";
import DynamicText from "@/components/dynamic/paragraph";
import { convertSeconds } from "@/utils/configs";

const BannerContent: React.FC = () => {
  const [faeutredSymplyFilm, setFaeutredSymplyFilm] = useState<any>({});
  const [timeFilm, settTimeFilm] = useState<any>(null);
  const film = sessionStorage.getItem("film");
  const setTimeData = useCallback(() => {
    if (film) {
      setFaeutredSymplyFilm(JSON.parse(film));
      const result = convertSeconds(JSON.parse(film).Duration);
      settTimeFilm(result);
    } else {
      setFaeutredSymplyFilm(bannerData["Featured"]);
      const result = convertSeconds(bannerData["Featured"]?.Duration);
      settTimeFilm(result);
    }
  }, [film]);
  useEffect(() => {
    setTimeData();
  }, [film]);

  return (
    <div className={styles.banner_container}>
      <div>
        <div className={styles.banner_container_title}>
          <DynamicText
            id={faeutredSymplyFilm.Id}
            component="span"
            text={faeutredSymplyFilm?.Category}
          />
          <img src={FeaturedTitleImage} alt={"FeaturedTitleImage"} />
        </div>

        <div className={styles.banner_container_time}>
          <strong>{faeutredSymplyFilm?.ReleaseYear}</strong>
          <strong>{faeutredSymplyFilm?.MpaRating}</strong>
          <strong>{`${timeFilm?.hours}h ${timeFilm?.minutes}m`}</strong>
        </div>
        <DynamicText
          id={faeutredSymplyFilm.Id}
          component="p"
          text={faeutredSymplyFilm.Description}
        />
        <div className={styles.banner_container_btns}>
          <Button label="Play" icon={<Play />} />
          <Button label="More Info" />
        </div>
      </div>
    </div>
  );
};

export default BannerContent;
