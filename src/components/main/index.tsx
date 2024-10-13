import React, { useState } from "react";
import BannerContent from "./banner/banner-content";
import CardSlide from "./slide-card/cards-slide";
import styles from "./banner/banner.module.scss";

interface IProps {
  filterName: string;
  setCoverImage: (coverImage: string) => void;
}

const MainContainer: React.FC<IProps> = ({ filterName, setCoverImage }) => {
  return (
    <>
      <div className={styles.banner_content_main}>
        <BannerContent />
        <CardSlide filterName={filterName} setCoverImage={setCoverImage} />
      </div>
    </>
  );
};

export default MainContainer;
