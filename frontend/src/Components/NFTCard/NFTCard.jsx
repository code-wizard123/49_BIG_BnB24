// NFTItem.js
import React from "react";
import styles from "./NFTItem.module.css";
import { Button } from "@mui/material";

const NFTCard = ({ id }) => {
  const redirectUrl = `/auction/${id}`;

  return (
    <div className={styles.container}>
      <div className={styles.nftGridItem}>
        <div className={styles.nftItemStyle}>
          <div className={styles.nftThumb}>
            <a href={redirectUrl}>
              <img
                src="https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg"
                alt=""
              />
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
                @author_name
              </a>
              <i className={styles.riShieldCheckFill}></i>
            </div>

            <div className={`${styles.nftProductBuy} ${styles.dFlexBetween}`}>
              Price: <strong>99.1 ETH</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
