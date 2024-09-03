// HeroSection.tsx
import React, { useState } from "react";
import styles from './home.module.css';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div id={styles.heroSection}>
      <div className={styles.itemMain}>
        <div className={styles.textBox}>
          <div className={styles.text}>
            <div className={styles.name}>Air Jordan 1</div>
            <div className={styles.surname}>MID SE</div>
            <div className={styles.description}>
              Would you like to own all of them? Prijavi se na nagradnu igru i osvoji svih 5 pari tenisica
            </div>
          </div>
          <button id={styles.buttonBuy}>SHOP</button>
        </div>
        <div className={styles.mainImage}>
          <img src={`./images/${images[currentImage]}`} alt={`Image ${currentImage + 1}`} />
        </div>
      </div>
      <div className={styles.otherImages}>
        <button id={styles.buttonLeft} onClick={handlePrev}>
          <img src="./images/leftArrow.png" alt="Left Arrow" />
        </button>
        {images.map((image: string, index: number) => (
          <div key={index} className={styles.smallImage} onClick={() => setCurrentImage(index)}>
            <img src={`./images/${image}`} alt={`Small Image ${index + 1}`} />
          </div>
        ))}
        <button id={styles.buttonRight} onClick={handleNext}>
          <img src="./images/rightArrow.png" alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
