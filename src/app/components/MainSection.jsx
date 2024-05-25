"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/main.module.css";
import { IoBagAddOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

const truncateTitle = (title, wordLimit) => {
  if (!title) return "";
  const words = title.split(" ");
  return words.slice(0, wordLimit).join(" ");
};
const MainSection = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      throw new Error("error:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.mainSection}>
      {data?.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <CiBookmark className={styles.bookmark} />
            <img src={item?.image} alt="image" />
            <div className={styles.detail}>
              <p>{truncateTitle(item?.title, 4)}</p>
              <div className={styles.price_container}>
                <div className={styles.price}>
                  <p>₹ {item?.price}</p>
                  <span>{item?.price * 2}</span>
                  <span>(50% Off)</span>
                </div>
                <IoBagAddOutline />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainSection;
