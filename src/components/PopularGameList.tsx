import React, { useState } from 'react';
import PopularGamesCard from './PopularGamesCard';
import { styled, keyframes } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import ViewAllButton from './ViewAllButton';

const games = [
  {
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d4cc70b-f7c4-499a-a91a-f3e86b8b39f0/dd907m5-fafc1068-8fc8-4d0c-baa0-c2bba45be97e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkNGNjNzBiLWY3YzQtNDk5YS1hOTFhLWYzZTg2YjhiMzlmMFwvZGQ5MDdtNS1mYWZjMTA2OC04ZmM4LTRkMGMtYmFhMC1jMmJiYTQ1YmU5N2UuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.q37FgTPWNqQ0tbU6Tw89aH-kpCLsV-i3FO_fsSEzUa8',
    title: 'Halo Infinite',
    price: '$1199 MXN',
    rating: '9.2 / 10',
  },
  {
    image: 'https://images3.alphacoders.com/127/1277778.jpg',
    title: 'Dead Space',
    price: '$1099 MXN',
    rating: '9.5 / 10',
  },
  {
    image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2018/04/dark-souls-remastered-cover.jpg?tf=1200x',
    title: 'Dark Souls',
    price: '$549 MXN',
    rating: '9.4 / 10',
  },
  {
    image: 'https://sm.ign.com/ign_fr/game/f/forza-hori/forza-horizon-5_9tmk.jpg',
    title: 'Forza Horizon',
    price: '$799 MXN',
    rating: '9.0 / 10',
  },
  {
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0822/GuWErMI21uTbfZ6ohfiF7Yt0.jpg',
    title: 'Mortal Kombat 11',
    price: '$599 MXN',
    rating: '9.1 / 10',
  },
  {
    image: 'https://store-images.s-microsoft.com/image/apps.50097.71434766889258227.1aee1ea7-c878-4f73-8cb5-6c5dc48abfc3.a5fa8f45-acfd-4893-87b5-59f5a7714298?format=jpg&w=720&h=720',
    title: 'Conker: Live & Reloaded',
    price: '$599 MXN',
    rating: '9.1 / 10',
  },
  {
    image: 'https://m.media-amazon.com/images/I/81Dfrv5Em3L._AC_UF894,1000_QL80_.jpg',
    title: 'Destiny 2',
    price: '$599 MXN',
    rating: '9.1 / 10',
  },
  {
    image: 'https://guilfordvoyager.com/wp-content/uploads/2022/03/518017-285x380-1.jpg',
    title: 'REVIII: Village',
    price: '$599 MXN',
    rating: '9.1 / 10',
  },
  {
    image: 'https://assetsio.gnwcdn.com/co2vyg.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
    title: 'Silent Hill 2',
    price: '$599 MXN',
    rating: '9.1 / 10',
  },
  {
    image: 'https://i.pinimg.com/736x/7c/5c/ac/7c5cac5ff6cd8ec3bb9dcbd632b780eb.jpg',
    title: 'Dante´s inferno',
    price: '$599 MXN',
    rating: '9.1 / 10',
  },
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

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  padding: '12px',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}));

const AnimatedCard = styled('div')({
  animation: `${fadeIn} 0.5s ease-in-out`,
});

const Title = styled('h2')({
  width: '100%',
  textAlign: 'left',
  color: 'white',
  margin: '20px 10px 0 100px',
  fontSize: '1.6rem',
});

const PopularGamesList: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isMedium = useMediaQuery('(min-width: 769px) and (max-width: 992px)');

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <Title>Más populares</Title>
      <StyledContainer style={{ justifyContent: isMobile ? 'center' : 'flex-start' }}>
        {games.slice(0, 5).map((game, index) => (
          <PopularGamesCard
            key={index}
            image={game.image}
            title={game.title}
            price={game.price}
            rating={game.rating}
          />
        ))}
        {showAll && games.slice(5).map((game, index) => (
          <AnimatedCard key={index + 5}>
            <PopularGamesCard
              image={game.image}
              title={game.title}
              price={game.price}
              rating={game.rating}
            />
          </AnimatedCard>
        ))}
        {!showAll && <ViewAllButton onClick={handleViewAll} />} 
      </StyledContainer>
    </>
  );
};

export default PopularGamesList;
  