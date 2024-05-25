import React from 'react';
import { Grid } from '@mui/material';
import PopularGamesCard from './PopularGamesCard';

const popularGames = [
  {
    image: 'https://example.com/image1.jpg',
    title: 'Halo Infinite',
    price: '$1199 MXN',
    rating: '9.2 / 10',
  },
  {
    image: 'https://example.com/image2.jpg',
    title: 'Dead Space',
    price: '$1099 MXN',
    rating: '9.5 / 10',
  },
  // Agrega más juegos según sea necesario
];

const PopularGames: React.FC = () => {
  return (
    <Grid container justifyContent="center">
      {popularGames.map((game, index) => (
        <PopularGamesCard
          key={index}
          image={game.image}
          title={game.title}
          price={game.price}
          rating={game.rating}
        />
      ))}
    </Grid>
  );
};

export default PopularGames;
