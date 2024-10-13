import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import styles from "./wrapper.module.scss";
import FeaturedCoverImage from "../assets/FeaturedCoverImage.png";
import { https_specials } from "./main/slide-card/cards-slide";
const ContainerWrapper = ({ children, coverImage }) => {
    const [coverStateImage, setcoverStateImage] = useState(null);
    const film = sessionStorage.getItem("film");
    const setTimeData = useCallback(() => {
        const foundImage = https_specials.find((image) => image.includes(JSON.parse(film)?.CoverImage));
        setcoverStateImage(foundImage);
    }, [coverImage]);
    useEffect(() => {
        setTimeData();
    }, [film]);
    return (_jsxs("div", { className: styles.full_container, children: [_jsx("img", { src: coverStateImage ? coverStateImage : FeaturedCoverImage, className: styles.full_container_image }), children] }));
};
export default ContainerWrapper;
