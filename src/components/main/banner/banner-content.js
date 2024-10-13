import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import bannerData from "../../../utils/data.json";
import FeaturedTitleImage from "@/assets/FeaturedTitleImage.png";
import styles from "./banner.module.scss";
import { Play } from "@/assets/svg/play";
import Button from "@/components/dynamic/button";
import DynamicText from "@/components/dynamic/paragraph";
import { convertSeconds } from "@/utils/configs";
const BannerContent = () => {
    const [faeutredSymplyFilm, setFaeutredSymplyFilm] = useState({});
    const [timeFilm, settTimeFilm] = useState(null);
    const film = sessionStorage.getItem("film");
    const setTimeData = useCallback(() => {
        if (film) {
            setFaeutredSymplyFilm(JSON.parse(film));
            const result = convertSeconds(JSON.parse(film).Duration);
            settTimeFilm(result);
        }
        else {
            setFaeutredSymplyFilm(bannerData["Featured"]);
            const result = convertSeconds(bannerData["Featured"]?.Duration);
            settTimeFilm(result);
        }
    }, [film]);
    useEffect(() => {
        setTimeData();
    }, [film]);
    return (_jsx("div", { className: styles.banner_container, children: _jsxs("div", { children: [_jsxs("div", { className: styles.banner_container_title, children: [_jsx(DynamicText, { id: faeutredSymplyFilm.Id, component: "span", text: faeutredSymplyFilm?.Category }), _jsx("img", { src: FeaturedTitleImage, alt: "FeaturedTitleImage" })] }), _jsxs("div", { className: styles.banner_container_time, children: [_jsx("strong", { children: faeutredSymplyFilm?.ReleaseYear }), _jsx("strong", { children: faeutredSymplyFilm?.MpaRating }), _jsx("strong", { children: `${timeFilm?.hours}h ${timeFilm?.minutes}m` })] }), _jsx(DynamicText, { id: faeutredSymplyFilm.Id, component: "p", text: faeutredSymplyFilm.Description }), _jsxs("div", { className: styles.banner_container_btns, children: [_jsx(Button, { label: "Play", icon: _jsx(Play, {}) }), _jsx(Button, { label: "More Info" })] })] }) }));
};
export default BannerContent;
