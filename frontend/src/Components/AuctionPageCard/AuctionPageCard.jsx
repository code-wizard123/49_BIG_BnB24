import React from "react";
import styles from "./AuctionPageCard.module.css";

const AuctionPageCard = ({ text, money }) => {
    return (
        <div>
            <div className={styles.card}>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-white">
                        {money}

                        <FontAwesomeIcon icon="fa-brands fa-ethereum" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuctionPageCard;
