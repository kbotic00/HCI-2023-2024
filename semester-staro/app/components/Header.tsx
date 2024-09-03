'use client'
import React, { useEffect } from "react";
import styles from './header.module.css'
import Link from "next/link";
import { useState } from "react";
function Header() {
    const [isMobile, setIsMobile] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 849) {
            setIsMobile(true);
        }
        else 
        {
            setIsMobile(false);
        }
      }, []);

    function navChange () {
        setShowNav(!showNav);
    }
    return <>

    <div id={styles.header}>
        <div  className={styles.navigation}>
            <div className={styles.logoNav}>
                <div className={styles.logoContainer}>
                    <h2 id={styles.logoTitle}>Boic</h2>
                </div>
                { isMobile ? <button id={styles.dropButton} onClick={navChange}> <img src ='/images/fi_menu.png' ></img></button> : ""}
            </div>
            {showNav || !isMobile ?
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
                <Link href="/about">
                    <p className={styles.navButton}>About</p>
                </Link>
            </div>
            :
            ""
            }
        </div>
    </div>
    </>
}

export default Header;