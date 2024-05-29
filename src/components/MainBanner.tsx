import React, { useState, useEffect, useRef } from 'react';
import { Palette } from 'color-thief-react';

const desktopImages = [
  'https://fanatical.imgix.net/product/original/68310a3e-4b93-45dc-b195-643a7ff53d51.jpeg?auto=compress,format&w=870&fit=crop&h=489',
  'https://ichef.bbci.co.uk/news/976/cpsprodpb/2E40/production/_96204811_rdr2_preordernow_649x352a-newbanner-5.23.jpg',
  'https://cdn-uploads.gameblog.fr/img/story/390756_618ac192bc9dd.jpg',
  'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/senua-s-saga-hellblade-2-s-2024-release-window-has-been-a-long-time-coming.jpg',
  'https://cdn.mos.cms.futurecdn.net/u5AvrmSq4kyqHZbd9SDnVQ.jpg',
];

const mobileImages = [
  'https://image.api.playstation.com/vulcan/ap/rnd/202010/0822/GuWErMI21uTbfZ6ohfiF7Yt0.jpg',
  'https://i.redd.it/bueqtztxmnj81.png',
  'https://image.api.playstation.com/vulcan/ap/rnd/202206/0222/a8y4xUnw4oThZxHuEBZvDzpz.jpg',
  'https://whiteaways.lk/wp-content/uploads/2020/10/DfW3l1EVQAIxIMv-min.jpg',
  'https://m.media-amazon.com/images/I/81r6IF9GNNL._AC_UF1000,1000_QL80_.jpg'
];

const styles = `
.carousel {
  position: relative;
  width: 100%;
  height: 95vh;
  margin: 0;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.carousel-item {
  flex: 0 0 100%;
  height: 100%;
}

.carousel img {
  width: 100%;
  height: 100%;
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
  bottom: 50px;
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

@media (max-width: 992px) {
  .carousel {
    height: 70vh;
  }
}

@media (max-width: 768px) {
  .carousel {
    height: 60vh;
  }
}

@media (max-width: 576px) {
  .carousel {
    height: 50vh;
  }
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
    <Palette src={images[activeIndex]} colorCount={5} format="rgbString" crossOrigin="anonymous">
      {({ data }) => (
        <div
          style={{
            boxShadow: data && data.length > 0 ? `${data[0]} 0px 0px 70px` : 'rgba(0, 0, 0, 0.5) 0px 10px 30px',
            transition: 'box-shadow 0.5s ease-in-out',
          }}
        >
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
          </div>
          <style>{styles}</style>
        </div>
      )}
    </Palette>
  );
};

export default MainBanner;
