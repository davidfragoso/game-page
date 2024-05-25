import React, { useState } from 'react';
import { styled, keyframes } from '@mui/system';
import NewsCard from './NewsCard';
import ViewAllButton from './ViewAllButton';

const news = [
  {
    image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/10/overwatch-2-2833297.jpg?tf=3840x',
    title: 'Overwatch 2: Actualización 3.4 de mayo 2024',
    description: 'Overwatch 2: Actualización 3.4 de mayo 2024',
  },
  {
    image: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc04e4637524166dc/621853fd6be1e66143a66db2/022822_TakeoverCap_Banner.jpg?auto=webp&disable=upscale&height=549',
    title: 'Valorant: Nuevo personaje disponible ya en la tienda',
    description: 'Valorant: Nuevo personaje disponible ya en la tienda',
  },
  {
    image: 'https://media.vandal.net/master/3-2023/20233520273874_1.jpg',
    title: 'Final Fantasy XV: Ya disponible en la tienda',
    description: 'Final Fantasy XV: Ya disponible en la tienda',
  },
  {
    image: 'https://media.vandal.net/master/3-2023/20233520273874_1.jpg',
    title: 'Final Fantasy XV: Ya disponible en la tienda',
    description: 'Final Fantasy XV: Ya disponible en la tienda',
  },
  {
    image: 'https://media.vandal.net/master/3-2023/20233520273874_1.jpg',
    title: 'Final Fantasy XV: Ya disponible en la tienda',
    description: 'Final Fantasy XV: Ya disponible en la tienda',
  },
  {
    image: 'https://media.vandal.net/master/3-2023/20233520273874_1.jpg',
    title: 'Final Fantasy XV: Ya disponible en la tienda',
    description: 'Final Fantasy XV: Ya disponible en la tienda',
  },
  {
    image: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc04e4637524166dc/621853fd6be1e66143a66db2/022822_TakeoverCap_Banner.jpg?auto=webp&disable=upscale&height=549',
    title: 'Valorant: Nuevo personaje disponible ya en la tienda',
    description: 'Valorant: Nuevo personaje disponible ya en la tienda',
  },
  {
    image: 'https://media.vandal.net/master/3-2023/20233520273874_1.jpg',
    title: 'Final Fantasy XV: Ya disponible en la tienda',
    description: 'Final Fantasy XV: Ya disponible en la tienda',
  },
  // Añade más noticias aquí...
];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1000px',
  overflow: 'hidden',
  padding: '20px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
}));

const SliderContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  overflowY: 'auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const SlideWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.5s ease',
  willChange: 'transform',
  gap: '10px',
});

const AnimatedContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '20px 0',
  animation: `${fadeIn} 0.5s ease-in-out`,
});

const Title = styled('h2')({
  width: '100%',
  textAlign: 'left',
  color: 'white',
  marginBottom: '10px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const ViewAllWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: '10px',
});

const NewsCarousel: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <Title>Novedades</Title>
      <Container>
        {!showAll ? (
          <>
            <SliderContainer>
              <SlideWrapper>
                {news.slice(0, 3).map((newsItem, index) => (
                  <NewsCard
                    key={index}
                    image={newsItem.image}
                    title={newsItem.title}
                    description={newsItem.description}
                  />
                ))}
              </SlideWrapper>
            </SliderContainer>
            <ViewAllWrapper>
              <ViewAllButton onClick={handleViewAll} />
            </ViewAllWrapper>
          </>
        ) : (
          <AnimatedContainer>
            {news.map((newsItem, index) => (
              <NewsCard
                key={index}
                image={newsItem.image}
                title={newsItem.title}
                description={newsItem.description}
              />
            ))}
          </AnimatedContainer>
        )}
      </Container>
    </>
  );
};

export default NewsCarousel;
