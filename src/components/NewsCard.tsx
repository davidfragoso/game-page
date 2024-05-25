import React from 'react';
import { Card, CardMedia, CardContent, Typography, styled } from '@mui/material';

interface NewsCardProps {
  image: string;
  title: string;
  description: string;
}

const StyledCard = styled(Card)({
  width: '300px',
  margin: '0 10px',
  backgroundColor: '#222',
  color: '#fff',
  borderRadius: '10px',
});

const NewsCard: React.FC<NewsCardProps> = ({ image, title }) => {
  return (
    <StyledCard>
      <CardMedia component="img" image={image} title={title} />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
       
      </CardContent>
    </StyledCard>
  );
};

export default NewsCard;
