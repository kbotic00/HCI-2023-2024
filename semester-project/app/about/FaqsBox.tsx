
import React, { useState } from "react";
import styles from './faqs.module.css';

function FaqsBox() {
    
    return <>
    <div className={styles.mainContainer}>
        
        <div className={styles.heading}>FAQS</div>
        
        <div className={styles.list}>

            <div className={styles.element}>
                <div className={styles.number}>01</div>
                <div className={styles.fullQuestion}>
                    <div className={styles.question}>Za koliko stiže paket?</div> 
                    <div className={styles.answer}>Paket stiže u roku 5-7 radnih dana.</div>  
                </div>
            </div>
            <div className={styles.element}>
                <div className={styles.number}>02</div>
                <div className={styles.fullQuestion}>
                        <div className={styles.question}>Kako funkcionira povrat?</div>
                        <div className={styles.answer}>Možete ga napraviti uživo ili putem pošte. Uživo donesete patike i račun na uvid. Kod povrata putem pošte pošaljete kopiju računa uz paket ili putem maila.</div>   
                </div>
            </div>

            <div className={styles.element}>
                <div className={styles.number}>03</div>
                <div className={styles.fullQuestion}>
                    <div className={styles.question}>Imaju li članovi popust?</div>
                    <div className={styles.answer}>Popust za članove na nesnižene proizvode je 10% te na snižene 5%.
                    Popust se obračunava u košarici unosom broja kartice.</div>   
                </div>
            </div>

            <div className={styles.element}>
                <div className={styles.number}>04</div>
                <div className={styles.fullQuestion}>
                    <div className={styles.question}>Koliko nakon povrata treba da se novac vrati na račun?</div>
                    <div className={styles.answer}>Novac će biti vraćen na račun unutar 14 radnih dana.</div>    
                </div>
            </div>
            

        </div> 
        
    </div>
    
    </>
}

export default FaqsBox;