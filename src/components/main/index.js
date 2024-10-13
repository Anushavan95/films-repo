import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BannerContent from "./banner/banner-content";
import CardSlide from "./slide-card/cards-slide";
import styles from "./banner/banner.module.scss";
const MainContainer = ({ filterName, setCoverImage }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: styles.banner_content_main, children: [_jsx(BannerContent, {}), _jsx(CardSlide, { filterName: filterName, setCoverImage: setCoverImage })] }) }));
};
export default MainContainer;
