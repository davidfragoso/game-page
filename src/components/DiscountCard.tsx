import React from 'react';
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
];

const CardContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  backgroundColor: '#1e1e1e',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '20px 0',
  width: '100%',
  maxWidth: '1200px',
  height: '500px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: '1000px',
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  flex: '0 0 30%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    flex: '0 0 40%',
    height: '300px',
    width: '100%',
  },
}));

const ContentContainer = styled('div')(({ theme }) => ({
  flex: '1',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '20px',
  },
}));

const Title = styled('h2')(({ theme }) => ({
  color: '#fff',
  fontSize: '2rem',
  margin: '0 0 10px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.8rem',
  },
}));

const Description = styled('p')(({ theme }) => ({
  color: '#aaa',
  fontSize: '1.3rem',
  margin: '0 0 20px 0',
  lineHeight: '1.5',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    margin: '0 0 10px 0',
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
  fontSize: '1.5rem'
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
}));

const DiscountedPrice = styled('span')(({ theme }) => ({
  color: '#fff',
  fontSize: '2.5rem',
  fontWeight: 'bold',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.2rem',
  },
}));

const DiscountBadge = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '20px',
  right: '20px',
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
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#555',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: '10px 20px',
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
  return (
    <div className="discount-card-container">
      {discounts.map((discount, index) => (
        <DiscountCard
          key={index}
          image={discount.image}
          title={discount.title}
          description={discount.description}
          originalPrice={discount.originalPrice}
          discountedPrice={discount.discountedPrice}
          discount={discount.discount}
        />
      ))}
    </div>
  );
};

export default DiscountCardList;
