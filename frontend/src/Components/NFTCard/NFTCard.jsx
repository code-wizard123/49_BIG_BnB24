// NFTItem.js
import React from "react";
import styles from "./NFTItem.module.css";
import { Button } from "@mui/material";

const NFTCard = ({ value }) => {
  console.log(value);
  if (value === undefined) {
    value = {
      cover:
        "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg",
      songName: "Song Name",
      owner: "Owner",
      price: "0.01",
      tokenId: 0,
    };
  }
  const redirectUrl = `/auction/${value.tokenId}`;

  return (
    <div className={styles.container}>
      <div className={styles.nftGridItem}>
        <div className={styles.nftItemStyle}>
          <div className={styles.nftThumb}>
            <a href={redirectUrl}>
              <img src={value.cover} alt="" />
            </a>
            <button className={styles.nftReactionBtn}>
              <i className={styles.riHeartFill}></i>
              <span>69</span>
            </button>
          </div>

          <div className={styles.nftContent}>
            <h2 className={styles.nftTitle}>
              <a href="#">{value.songName}</a>
            </h2>

            <div className={`${styles.nftProfile} ${styles.dFlexCenter}`}>
              <a href="#" className={styles.authortext}>
                @{value.owner}
              </a>
              <i className={styles.riShieldCheckFill}></i>
            </div>

            <div className={`${styles.nftProductBuy} ${styles.dFlexBetween}`}>
              Price: <strong>{value.price} ETH</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
