import React from 'react';
import { styled } from '@mui/system';

const StyledButtonContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '16px',
  marginBottom: '16px',
  position: 'relative',
  '&:before, &:after': {
    content: '""',
    flex: '1',
    borderBottom: '1px solid #fff',
    margin: 'auto',
  },
  '&:before': {
    marginRight: '10px',
  },
  '&:after': {
    marginLeft: '10px',
  },
});

const StyledButton = styled('button')({
  padding: '10px 20px',
  backgroundColor: '#1D1D1D',
  color: 'white',
  border: '1px solid #fff',
  cursor: 'pointer',
  textAlign: 'center',
  '&:hover': {
    backgroundColor: '#555',
  },
});

interface ViewAllButtonProps {
  onClick: () => void;
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ onClick }) => {
  return (
    <StyledButtonContainer>
      <StyledButton onClick={onClick}>Ver Todo</StyledButton>
    </StyledButtonContainer>
  );
};

export default ViewAllButton;
