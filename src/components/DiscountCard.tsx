import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/system';

interface DiscountCardProps {
  image: string;
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
}

const discounts = [
  {
    image: 'https://imgs.search.brave.com/-ysLq3ZAa0WCf1olbOj5rngpZUI_XQRzLCJXOdFWUOY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QTFpSFdLd1VVbkwu/cG5n',
    title: 'Universe Sandbox 2',
    description: 'Crea y destruye a una escala inimaginable con un simulador espacial realista basado en la física. Explora la belleza de nuestro universo y la fragilidad de nuestro planeta. Utiliza la ciencia para torcer las leyes de la gravedad, colisionar planetas, hacer hervir océanos, disparar épicos láseres espaciales y personalizar tu universo. RV opcional.',
    originalPrice: '$799 MXN',
    discountedPrice: '$399 MXN',
    discount: '-50%',
  },
  {
    image: 'https://imgs.search.brave.com/-ysLq3ZAa0WCf1olbOj5rngpZUI_XQRzLCJXOdFWUOY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/QTFpSFdLd1VVbkwu/cG5n',
    title: 'Universe Sandbox 2',
    description: 'Crea y destruye a una escala inimaginable con un simulador espacial realista basado en la física. Explora la belleza de nuestro universo y la fragilidad de nuestro planeta. Utiliza la ciencia para torcer las leyes de la gravedad, colisionar planetas, hacer hervir océanos, disparar épicos láseres espaciales y personalizar tu universo. RV opcional.',
    originalPrice: '$799 MXN',
    discountedPrice: '$399 MXN',
    discount: '-50%',
  },
];

const SectionContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1100px',
  margin: '20px auto',
}));

const SectionTitle = styled('h2')(({ theme }) => ({
  color: '#fff',
  textAlign: 'start',
  margin: '20px 0',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    margin: '10px 0',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    textAlign: 'center',
    margin: '15px 0',
  },
}));

const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#1e1e1e',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '20px',
  width: '100%',
  height: '550px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
    margin: '10px 0',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    flexDirection: 'column',
    height: 'auto',
    margin: '15px 0',
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  flex: '0 0 50%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    flex: '0 0 auto',
    height: '200px',
    width: '100%',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    flex: '0 0 auto',
    height: '250px',
    width: '100%',
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  flex: '1',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '10px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    padding: '15px',
  },
}));

const Title = styled('h2')(({ theme }) => ({
  color: '#fff',
  fontSize: '2rem',
  margin: '0 0 10px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    textAlign: 'center',
    margin: '10px 0',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.75rem',
    textAlign: 'center',
    margin: '10px 0',
  },
}));

const Description = styled('p')(({ theme }) => ({
  color: '#aaa',
  fontSize: '1.2rem',
  margin: '20px 50px 20px 0',
  lineHeight: '1.5',
  textAlign: 'start',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    textAlign: 'center',
    margin: '10px 0',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.1rem',
    textAlign: 'center',
    margin: '15px 0',
  },
}));

const PriceContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const OriginalPrice = styled('span')(({ theme }) => ({
  color: '#ff4d4d',
  textDecoration: 'line-through',
  fontSize: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.4rem',
  },
}));

const DiscountedPrice = styled('span')(({ theme }) => ({
  color: '#fff',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '2.2rem',
  },
}));

const DiscountBadge = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '50px',
  backgroundColor: '#ff4d4d',
  color: '#fff',
  padding: '10px',
  borderRadius: '5px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  transform: 'rotate(-10deg)',
  [theme.breakpoints.down('sm')]: {
    top: '10px',
    right: '10px',
    fontSize: '1.2rem',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    top: '15px',
    right: '20px',
    fontSize: '1.3rem',
  },
}));

const Button = styled('button')(({ theme }) => ({
  backgroundColor: '#1D1D1D',
  color: '#fff',
  border: '1px solid #fff',
  padding: '10px 20px',
  cursor: 'pointer',
  textAlign: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  margin: '20px',
  alignSelf: 'center',
  '&:hover': {
    backgroundColor: '#555',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: '10px 20px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    fontSize: '1.1rem',
    padding: '10px 18px',
  },
}));

const ArrowButton = styled('button')(({ theme }) => ({
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    top: '95%',
    bottom: 'auto',
    transform: 'none',
    padding: '10px 10px',
    marginTop: '-30px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    top: '90%',
    bottom: 'auto',
    transform: 'none',
    padding: '10px 10px',
    marginTop: '-20px',
  },
}));

const PrevButton = styled(ArrowButton)(({ theme }) => ({
  left: '10px',
  [theme.breakpoints.down('sm')]: {
    left: '10px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    left: '15px',
  },
}));

const NextButton = styled(ArrowButton)(({ theme }) => ({
  right: '10px',
  [theme.breakpoints.down('sm')]: {
    right: '10px',
  },
  [theme.breakpoints.between('sm', 'md')]: {
    right: '15px',
  },
}));

const DiscountCard: React.FC<DiscountCardProps> = ({
  image,
  title,
  description,
  originalPrice,
  discountedPrice,
  discount,
}) => {
  return (
    <CardContainer>
      <ImageContainer style={{ backgroundImage: `url(${image})` }} />
      <ContentContainer>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <PriceContainer>
          <OriginalPrice>{originalPrice}</OriginalPrice>
          <DiscountedPrice>{discountedPrice}</DiscountedPrice>
        </PriceContainer>
        <Button>Comprar</Button>
      </ContentContainer>
      <DiscountBadge>{discount} Dto</DiscountBadge>
    </CardContainer>
  );
};

const DiscountCardList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % discounts.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + discounts.length) % discounts.length);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % discounts.length);
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
    <SectionContainer>
      <SectionTitle>Mejores ofertas</SectionTitle>
      <div
        className="discount-card-container"
        style={{ position: 'relative', display: 'flex', overflow: 'hidden' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <PrevButton onClick={handlePrev}>&#10094;</PrevButton>
        <NextButton onClick={handleNext}>&#10095;</NextButton>
        <div style={{ display: 'flex', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${activeIndex * 100}%)`, width: '100%' }}>
          {discounts.map((discount, index) => (
            <div key={index} style={{ flex: '0 0 100%', maxWidth: '100%' }}>
              <DiscountCard
                image={discount.image}
                title={discount.title}
                description={discount.description}
                originalPrice={discount.originalPrice}
                discountedPrice={discount.discountedPrice}
                discount={discount.discount}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default DiscountCardList;
