import React from 'react';
import styles from './AuctionPageCard.module.css';

const AuctionPageCard = ({ text, money }) => {
    return (
        <div className={styles.grid}>
            <div className={`${styles.carda} ${styles.cardStyles}`}>
                <h4>{text}</h4>
                <p>
                    {money} ETH
                </p>
                <div className={styles.shine}></div>
                <div className={styles.background}>
                    <div className={styles.tiles}>
                        <div className={`${styles.tile} ${styles.tile - 1}`}></div>
                        <div className={`${styles.tile} ${styles.tile - 2}`}></div>
                        <div className={`${styles.tile} ${styles.tile - 3}`}></div>
                        <div className={`${styles.tile} ${styles.tile - 4}`}></div>
                        <div className={`${styles.tile} ${styles.tile - 5}`}></div>
                        <div className={`${styles.tile} ${styles.tile - 6}`}></div>
                        <div className={`${styles.tile} ${styles.tile - 7}`}></div>
                        <div className={`${styles.tile} ${styles.tile - 8}`}></div>
                        <div className={`${styles.tile} ${styles.tile - 9}`}></div>
                        <div className={`${styles.tile} ${styles.tile - 10}`}></div>
                    </div>
                    <div className={`${styles.line} ${styles.line - 1}`}></div>
                    <div className={`${styles.line} ${styles.line - 2}`}></div>
                    <div className={`${styles.line} ${styles.line - 3}`}></div>
                </div>
            </div>

            {/* Add another card with similar structure */}

            {/* ... Other components */}
        </div>
    );
};

export default AuctionPageCard;
