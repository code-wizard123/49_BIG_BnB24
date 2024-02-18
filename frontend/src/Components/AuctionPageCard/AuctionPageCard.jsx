import React from "react";
import styles from "./AuctionPageCard.module.css";
import { FaEthereum } from "react-icons/fa";

const AuctionPageCard = ({ money }) => {
    return (
        <div>
            <div className={styles.card}>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-white">{money}</p>
                    <FaEthereum style={{ color: "white" }} />
                </div>
            </div>
        </div>
    );
};

export default AuctionPageCard;
