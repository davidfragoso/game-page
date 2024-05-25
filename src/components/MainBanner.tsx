import React, { useState, useEffect, useRef } from 'react';

const desktopImages = [
  'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MortalKombat11.jpg',
  'https://xxboxnews.blob.core.windows.net/prod/sites/2/2021/06/HaloInfiniteMP_Hero_FINAL.jpg',
  'https://cdn1.epicgames.com/offer/6b0541b5d9aa476cbf407643ab3b1d7d/EGS_TheCallistoProtocol_StrikingDistanceStudios_S1_2560x1440-b99bb2275f932ed9beedefff5ced3baa',
  'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/04/thumb-1920-679351.jpg'
];

const mobileImages = [
  'https://image.api.playstation.com/vulcan/ap/rnd/202010/0822/GuWErMI21uTbfZ6ohfiF7Yt0.jpg',
  'https://image.api.playstation.com/vulcan/ap/rnd/202206/0222/a8y4xUnw4oThZxHuEBZvDzpz.jpg',
  'https://whiteaways.lk/wp-content/uploads/2020/10/DfW3l1EVQAIxIMv-min.jpg',
  'https://m.media-amazon.com/images/I/81r6IF9GNNL._AC_UF1000,1000_QL80_.jpg'
];

const styles = `
.carousel {
  position: relative;
  max-width: 100%;
  margin: 0;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
}

.carousel-item.active {
  opacity: 1;
}

.carousel img {
  width: 100%;
  height: 90vh;
  object-fit: cover;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1000;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.carousel-dots {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
}

.carousel-dots .dot {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 0 5px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.carousel-dots .dot.active {
  background: rgba(255, 255, 255, 1);
}
`;

const MainBanner: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      clearInterval(interval);
    };
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    startX.current = event.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (!isDragging.current) return;
    currentX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    const diffX = startX.current - currentX.current;
    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
    isDragging.current = false;
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-control prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#10095;
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
      <style>{styles}</style>
    </div>
  );
};

export default MainBanner;
