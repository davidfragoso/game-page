import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

interface PopularGamesCardProps {
  image: string;
  title: string;
  price: string;
  rating: string;
}

const StyledCard = styled(Card)({
  backgroundColor: '#222',
  color: '#fff',
  borderRadius: '10px',
  overflow: 'hidden',
  width: '180px',
  margin: '0.5rem',
  position: 'relative',

});

const StyledCardMedia = styled(CardMedia)({
  height: '230px',
  filter: 'brightness(0.9)',
});

const Rating = styled(Typography)({
  color: '#4caf50',
});

const PopularGamesCard: React.FC<PopularGamesCardProps> = ({ image, title, price, rating }) => {
  return (
    <StyledCard>
      <StyledCardMedia image={image} title={title} style={{ height: '250px' }} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{price}</Typography>
        <Rating variant="body2">{rating}</Rating>
      </CardContent>
    </StyledCard>
  );
};

export default PopularGamesCard;
