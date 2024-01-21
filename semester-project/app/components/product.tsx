import React from "react";
import styles from './home.module.css';

const Oneproduct = () => {
    return (
        <div className={styles.product}>
        <div className={styles.photoBox}>
            <button className={styles.productPhoto}>
                <img src="./images/smallImage3.png"></img>
            </button>
        </div>
        <div className={styles.productTextBox}>
            <div className={styles.productText}>
                <div className={styles.productName}>Nike Air Force ‘07</div>
                <div className={styles.productCategorie}>Men’s Shoes</div>
            </div>
            <div className={styles.productPrice}>€ 119.99</div>
        </div>
    </div>
    );
  };


export default Oneproduct;
