import React, { useCallback, useEffect, useState } from "react";
import styles from "./wrapper.module.scss";
import FeaturedCoverImage from "../assets/FeaturedCoverImage.png";
import { https_specials } from "./main/slide-card/cards-slide";
interface IChilds {
  children: React.ReactNode;
  coverImage: string;
}

const ContainerWrapper: React.FC<IChilds> = ({ children, coverImage }) => {
  const [coverStateImage, setcoverStateImage] = useState<null | string | undefined>(null);

  const film = sessionStorage.getItem("film");
  const setTimeData = useCallback(() => {
    const foundImage = https_specials.find((image: string) =>
      image.includes(JSON.parse(film)?.CoverImage)
    );
    setcoverStateImage(foundImage);
  }, [coverImage]);
  useEffect(() => {
    setTimeData();
  }, [film]);

  return (
    <div className={styles.full_container}>
      <img
        src={coverStateImage ? coverStateImage : FeaturedCoverImage}
        className={styles.full_container_image}
      />
      {children}
    </div>
  );
};

export default ContainerWrapper;
