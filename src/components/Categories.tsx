import React from 'react';
import { styled } from '@mui/system';
import { Accordion, AccordionSummary, AccordionDetails, useMediaQuery, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const categories = [
  'Free-to-play',
  'Estrategia',
  'Indie',
  'Terror',
  'Multijugador',
  'Acción',
  'Triple A',
  'Carreras',
  'Demos',
  'Simulación',
];

const StyledCategoriesCard = styled('div')(({ theme }) => ({
  backgroundColor: '#222',
  color: '#fff',
  borderRadius: '10px',
  padding: '1rem',
  margin: '0.5rem',
  width: '200px',
  [theme.breakpoints.down('sm')]: {
    visibility: 'hidden', // Ocultar en pantallas móviles manteniendo el espacio
    height: 0,
  },
}));

const CategoryList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
});

const CategoryItem = styled('li')({
  marginBottom: '0.5rem',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const StyledAccordion = styled(Accordion)({
  backgroundColor: '#212121',
  color: '#fff',
  width: '100%',
  '&:before': {
    display: 'none',
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  backgroundColor: '#212121',
  color: '#fff',
});

const StyledAccordionDetails = styled(AccordionDetails)({
  backgroundColor: '#212121',
  color: '#fff',
});

const CategoriesWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginTop: '100px',
  },
}));

const Categories: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <CategoriesWrapper>
      {isMobile ? (
        <StyledAccordion>
          <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="categories-content" id="categories-header">
            <Typography>Categorías</Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <CategoryList>
              {categories.map((category, index) => (
                <CategoryItem key={index}>{category}</CategoryItem>
              ))}
            </CategoryList>
          </StyledAccordionDetails>
        </StyledAccordion>
      ) : (
        <StyledCategoriesCard>
          <Typography variant="h6">Categorías</Typography>
          <CategoryList>
            {categories.map((category, index) => (
              <CategoryItem key={index}>{category}</CategoryItem>
            ))}
          </CategoryList>
        </StyledCategoriesCard>
      )}
    </CategoriesWrapper>
  );
};

export default Categories;
