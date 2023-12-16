import React, { useEffect } from "react";
import styles from './header.module.css'
import Link from "next/link";
function Header() {
    return <>
    <div id={styles.header}>
        <div className={styles.logoNav}>
            <div className={styles.logoContainer}>
                <h2 id={styles.logoTitle}>Boic</h2>
            </div>
        </div>

        <div className={styles.navContainer}>
            <Link href="/">
                <p className={styles.navButton}>Home</p>
            </Link>
            <Link href="./women">
                <p className={styles.navButton}>Women</p>
            </Link>
            <Link href="/men">
                <p className={styles.navButton}>Men</p>
            </Link>
            <Link href="/kids">
                <p className={styles.navButton}>Kids</p>
            </Link>
            <Link href="/sale">
                <p className={styles.navButtonSale}>Sale</p>
            </Link>
        </div>
        <div id={styles.searchContainer}>
        <input type="search"></input>
        </div>
    </div>
    </>
}

export default Header;