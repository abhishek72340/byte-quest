import React from "react";
import Image from "next/image";
import styles from "../styles/category.module.css";
const images = [
  { src: "/images/Frame 461.png", label: "All Bags" },
  { src: "/images/Frame 50.png", label: "Vanity Pouch" },
  { src: "/images/Frame 49.png", label: "Tote Bag" },
  { src: "/images/Frame 49 (2).png", label: "Duffle Bag" },
  { src: "/images/Frame 49 (1).png", label: "laptop Sleeve" },
  { src: "/images/Frame 22.png", label: "Messenger Bags" },
  { src: "/images/Frame 20.png", label: "Slings Bag" },
  { src: "/images/Frame 13.png", label: "Handbags" },
];
const CategorySection = () => {
  return (
    <div className={styles.category}>
      {images?.map((img, index) => {
        return (
          <div key={index}>
            <Image src={img?.src} alt="category" width={100} height={100} />
            <span className={styles.category}>{img.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
