import React, { useEffect } from "react";
import styles from './footer.module.css'
import Link from "next/link";
function Footer() {
  return <>
    <div id={styles.boxOne}>
      <div className={styles.deliveryInfoList}>
        <div className={styles.deliveryInfo}>
          <div className={styles.featureLogo}>
            <img src="./images/delivery.png"></img>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureName}>Delivery via DPD </div>
            <div className={styles.featureDescription}>within 4-6 business days</div>
          </div>
        </div>
        <div className={styles.deliveryInfo}>
          <div className={styles.featureLogo}>
            <img src="./images/box.png"></img>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureName}>Free delivery</div>
            <div className={styles.featureDescription}>for orders over 60 euros</div>
          </div>
        </div>
        <div className={styles.deliveryInfo}>
          <div className={styles.featureLogo}>
            <img src="./images/return.png"></img>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureName}>Free return</div>
            <div className={styles.featureDescription}>within 30 days</div>
          </div>
        </div>
      </div>
    </div>
    <div id={styles.boxTwo}>
      <div className={styles.helpbox}>
        <div className={styles.helpName}>About</div>
        <ul>
          <li>Opći uvjeti</li>
          <li>Politika zaštite privatnosti</li>
          <li>Impressum</li>
          <li>Odgovornost</li>
          <li>Platforma za prijave</li>
          <li>Postavke privatnosti</li>
        </ul>
      </div>
      <div className={styles.helpbox}>
        <div className={styles.helpName}>Support</div>
        <ul>
          <li>Kontakt</li>
          <li>Trgovine</li>
          <li>Newsletter</li>
          <li>Odgovornost</li>
        </ul>

      </div>
      <div className={styles.helpbox}>
        <div className={styles.helpName}>Help</div>
        <ul>
          <li>FAQs</li>
          <li>Delivery</li>
          <li>Return</li>
        </ul>
      </div>
    </div>
  </>
}

export default Footer;