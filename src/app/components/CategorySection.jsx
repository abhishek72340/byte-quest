import React from "react";
import Image from "next/image";
import styles from "../styles/category.module.css";
import AllBags from "../../../public/images/Frame 461.png";
import VanityPouch from "../../../public/images/Frame 50.png";
import Totebag from "../../../public/images/Frame 49.png";
import DuffleBag from "../../../public/images/Frame 49 (2).png";
import LaptopSleeve from "../../../public/images/Frame 49 (1).png";
import MessengerBag from "../../../public/images/Frame 22.png";
import SlingsBag from "../../../public/images/Frame 20.png";
import Handbag from "../../../public/images/Frame 13.png";

const images = [
  { component: AllBags, label: "All Bags" },
  { component: VanityPouch, label: "Vanity Pouch" },
  { component: Totebag, label: "Tote Bag" },
  { component: DuffleBag, label: "Duffle Bag" },
  { component: LaptopSleeve, label: "laptop Sleeve" },
  { component: MessengerBag, label: "Messenger Bags" },
  { component: SlingsBag, label: "Slings Bag" },
  { component: Handbag, label: "Handbags" },
];
const CategorySection = () => {
  return (
    <div className={styles.category}>
      {images?.map((img, index) => {
        return (
          <div key={index}>
            <Image src={img?.component} alt="all-bags" />
            <span className={styles.category}>{img.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
