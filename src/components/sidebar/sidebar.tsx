import React, { useState } from "react";
import { navbarMenuTabs } from "@/utils/configs";
import styles from "./sidebar.module.scss";
import AvatarIcon from "../../assets/icons/avatar.png";
import DynamicText from "../dynamic/paragraph";
import { CloseIcon } from "@/assets/svg/close";
import { NavbarMenuTab } from "@/utils/types";

interface ISideProps {
  setFilterName: (label: string) => void;
}

const Sidebar: React.FC<ISideProps> = ({ setFilterName }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (item: NavbarMenuTab, index: number) => {
    setFilterName(item.label);
    setActiveIndex(index);
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    setActiveIndex(null);
  };
  return (
    <div
      className={`${styles.container_sidebar} ${
        isOpen ? styles.container_sidebar_open : ""
      }`}
    >
      {isOpen || activeIndex ? <CloseIcon event={handleCloseClick} /> : null}
      <div className={styles.container_sidebar_content}>
        {isOpen || activeIndex ? (
          <div className={styles.container_sidebar_header}>
            <img
              src={AvatarIcon}
              alt="avatar"
              className={styles.container_sidebar_content_avatar}
            />
            <DynamicText text="Daniel" component={"p"} />
          </div>
        ) : null}

        <nav className={styles.container_sidebar_nav}>
          {navbarMenuTabs.map((tab: NavbarMenuTab, index: number) => (
            <div
              className={`${styles.container_sidebar_nav_cover_icons} ${
                activeIndex === index ? styles.activeTab : ""
              } ${isOpen && activeIndex === index ? "show-labels" : ""}`}
              key={index}
              onClick={() => handleTabClick(tab, index)}
            >
              <img src={tab.icon} alt={tab.label} />
              {isOpen ? (
                <span className={styles.container_sidebar_labels}>
                  {tab.label}
                </span>
              ) : null}
            </div>
          ))}
        </nav>
        {isOpen && activeIndex !== null && (
          <ul className={styles.container_sidebar_bottom}>
            <li>Language</li>
            <li>Get Help</li>
            <li>Exit</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
