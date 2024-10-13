import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { navbarMenuTabs } from "@/utils/configs";
import styles from "./sidebar.module.scss";
import AvatarIcon from "../../assets/icons/avatar.png";
import DynamicText from "../dynamic/paragraph";
import { CloseIcon } from "@/assets/svg/close";
const Sidebar = ({ setFilterName }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleTabClick = (item, index) => {
        setFilterName(item.label);
        setActiveIndex(index);
        setIsOpen(true);
    };
    const handleCloseClick = () => {
        setIsOpen(false);
        setActiveIndex(null);
    };
    return (_jsxs("div", { className: `${styles.container_sidebar} ${isOpen ? styles.container_sidebar_open : ""}`, children: [isOpen || activeIndex ? _jsx(CloseIcon, { event: handleCloseClick }) : null, _jsxs("div", { className: styles.container_sidebar_content, children: [isOpen || activeIndex ? (_jsxs("div", { className: styles.container_sidebar_header, children: [_jsx("img", { src: AvatarIcon, alt: "avatar", className: styles.container_sidebar_content_avatar }), _jsx(DynamicText, { text: "Daniel", component: "p" })] })) : null, _jsx("nav", { className: styles.container_sidebar_nav, children: navbarMenuTabs.map((tab, index) => (_jsxs("div", { className: `${styles.container_sidebar_nav_cover_icons} ${activeIndex === index ? styles.activeTab : ""} ${isOpen && activeIndex === index ? "show-labels" : ""}`, onClick: () => handleTabClick(tab, index), children: [_jsx("img", { src: tab.icon, alt: tab.label }), isOpen ? (_jsx("span", { className: styles.container_sidebar_labels, children: tab.label })) : null] }, index))) }), isOpen && activeIndex !== null && (_jsxs("ul", { className: styles.container_sidebar_bottom, children: [_jsx("li", { children: "Language" }), _jsx("li", { children: "Get Help" }), _jsx("li", { children: "Exit" })] }))] })] }));
};
export default Sidebar;
