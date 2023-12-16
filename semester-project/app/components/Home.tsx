import React from "react";
import styles from './home.module.css'

function Home() {
    return (
        <>
            <div id={styles.heroSection}>
                <div className={styles.itemMain}>
                    <div className={styles.textBox}>
                        <div className={styles.name}>Air Jordan 1</div>
                        <div className={styles.surname}>MID SE</div>
                        <div className={styles.description}>Would you like to own all of them? Prijavi se na nagradnu igru i osvoji svih 5 pari tenisica</div>
                        <button id={styles.buttonBuy}>Buy</button>
                    </div>
                    <div className={styles.mainImage}>
                        <img src="./images/Component 1.png"></img>
                    </div>
                </div>
                <div className={styles.otherImages}>
                    <button id={styles.buttonLeft}>
                        <img src="./images/leftArrow.png"></img>
                    </button>
                    <div className={styles.smallImage}>
                        <img src="./images/smallImage1.png"></img>
                    </div>
                    <div className={styles.smallImage}>
                        <img src="./images/smallImage2.png"></img>
                    </div>
                    <div className={styles.smallImage}>
                        <img src="./images/smallImage3.png"></img>
                    </div>
                    <button id={styles.buttonRight}>
                        <img src="./images/rightArrow.png"></img>
                    </button>
                </div>
            </div>

            <div className={styles.partTwo}>
                <div className={styles.categorieShow}>
                    <div className={styles.categorieName}>Dropping soon</div>
                    <div className={styles.productBox}>
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
                    </div>
                </div>
                <div className={styles.categorieShow}>
                    <div className={styles.categorieName}>Najnovije</div>
                    <div className={styles.productBox}>
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
                    </div>
                </div>
                <div className={styles.categorieShow}>
                    <div className={styles.categorieName}>Najprodavanije</div>
                    <div className={styles.productBox}>
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
                    </div>
                </div>
            </div>
            <div id={styles.partThree}>
                <div className={styles.categorieBox}>
                    <div className={styles.categorie}>
                        <img src="./images/men.png"></img>
                    </div>
                    <div className={styles.categorie}>
                        <img src="./images/women.png"></img>
                    </div>
                    <div className={styles.categorie}>
                        <img src="./images/kids.png"></img>
                    </div>
                </div>
            </div>
            <div className={styles.partTwo}>
                <div className={styles.categorieShow}>
                    <div className={styles.categorieName}>Akcija</div>
                    <div className={styles.productBox}>
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
                    </div>
                </div>
            </div>
            <div id={styles.brandBox}>
                <div className={styles.brandList}>
                    <div className={styles.brand}>
                        <img src="./images/nike.png"></img>
                    </div>
                    <div className={styles.brand}>
                        <img src="./images/converse.png"></img>
                    </div>
                    <div className={styles.brand}>
                        <img src="./images/adidas.png"></img>
                    </div>
                    <div className={styles.brand}>
                        <img src="./images/vans.png"></img>
                    </div>
                    <div className={styles.brand}>
                        <img src="./images/puma.png"></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;