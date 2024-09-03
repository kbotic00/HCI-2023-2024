'use client';
import React, { useEffect, useState} from "react";
import styles from './home.module.css'
import ImageSlider from "./HeroSection";
import Oneproduct from "./product";


function Home() { 
    const images = [
        'Image1.png',
        'Image2.png',
        'Image3.png',
      ]; 
      const [isClient, setIsClient] = useState(false);
      const [shouldRenderProducts, setShouldRenderProducts] = useState(false);
    
      useEffect(() => {
        setIsClient(true);
    
        // Check window width after the component mounts
        const handleResize = () => {
          setShouldRenderProducts(window.innerWidth <= 849);
        };
    
        window.addEventListener("resize", handleResize);
    
        // Initial check
        handleResize();
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);   
    
        return (
            <>
            <ImageSlider images={images} />

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
                    <div className={styles.categorieName}>Dropping soon</div>
                    <div className={styles.productBox}>
                        {/* Render different number of products based on screen width */}
                        {isClient && shouldRenderProducts ? (
                        <>
                            <Oneproduct/> 
                            <Oneproduct/> 
                            <Oneproduct/>
                        </>
                        ) : (
                        <>
                        <Oneproduct/> 
                                <Oneproduct/> 
                                <Oneproduct/> 
                                <Oneproduct/> 
                                <Oneproduct/>
                        </>
                        )}
                    </div>
                </div>

                <div className={styles.categorieShow}>
                    <div className={styles.categorieName}>Najnovije</div>
                        <div className={styles.productBox}>
                            {/* Render different number of products based on screen width */}
                            {isClient && shouldRenderProducts ?(
                            <>
                                <Oneproduct/> 
                                <Oneproduct/> 
                                <Oneproduct/>
                            </>
                            ) : (
                            <>
                            <Oneproduct/> 
                                    <Oneproduct/> 
                                    <Oneproduct/> 
                                    <Oneproduct/> 
                                    <Oneproduct/>
                            </>
                            )}
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

           
            <div className={styles.partTwo}>
                <div className={styles.categorieShow}>
                    <div className={styles.categorieName}>Najprodavanije</div>
                    <div className={styles.productBox}>
                        {/* Render different number of products based on screen width */}
                        {isClient && shouldRenderProducts ? (
                        <>
                            <Oneproduct/> 
                            <Oneproduct/> 
                            <Oneproduct/>
                        </>
                        ) : (
                        <>
                        <Oneproduct/> 
                                <Oneproduct/> 
                                <Oneproduct/> 
                                <Oneproduct/> 
                                <Oneproduct/>
                        </>
                        )}
                    </div>
                    </div>
                </div>
                <div className={styles.categorieShow}>
                    <div className={styles.categorieName}>Akcija</div>
                        <div className={styles.productBox}>
                            {/* Render different number of products based on screen width */}
                            {isClient && shouldRenderProducts ? (
                            <>
                                <Oneproduct/> 
                                <Oneproduct/> 
                                <Oneproduct/>
                            </>
                            ) : (
                            <>
                            <Oneproduct/> 
                                    <Oneproduct/> 
                                    <Oneproduct/> 
                                    <Oneproduct/> 
                                    <Oneproduct/>
                            </>
                            )}
                        </div>
                    
                </div>
        </>
    );
}

export default Home;
