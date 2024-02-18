// NFTItem.js
import React from "react";
import styles from "./NFTItem.module.css";
import { Button } from "@mui/material";

const NFTCard = ({ id, imgUrl, author, price }) => {
  const redirectUrl = `/auction/${id}`;

  return (
    <div className={styles.container}>
      <div className={styles.nftGridItem}>
        <div className={styles.nftItemStyle}>
          <div className={styles.nftThumb}>
            <a href={redirectUrl}>
              <img src={imgUrl} alt="" />
            </a>
            <button className={styles.nftReactionBtn}>
              <i className={styles.riHeartFill}></i>
              <span>69</span>
            </button>
          </div>

          <div className={styles.nftContent}>
            <h2 className={styles.nftTitle}>
              <a href="#">Name NFT #{id}</a>
            </h2>

            <div className={`${styles.nftProfile} ${styles.dFlexCenter}`}>
              <a href="#">
                <img
                  src="https://yt3.ggpht.com/QjvZEAyWwOGtkY4D36Q8tiblGg3vXwaohmUkr_zMNGatyLEniLkWq_MRpC7RaZNtoXbbcvC5tw=s900-c-k-c0x00ffffff-no-rj"
                  className={styles.nftImageAvatar}
                  alt=""
                />
              </a>
              <a href="#" className={styles.authortext}>
                @{author}
              </a>
              <i className={styles.riShieldCheckFill}></i>
            </div>

            <div className={`${styles.nftProductBuy} ${styles.dFlexBetween}`}>
              Price: <strong>{price}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
