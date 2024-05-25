import React from 'react';

const SubCategories: React.FC = () => {
  return (
    <div className="sub-categories-card">
      <div className="category">
        <span className="category-icon">🚀</span>
        <span className="category-label">Populares</span>
      </div>
      <div className="category">
        <span className="category-icon">📢</span>
        <span className="category-label">Novedades</span>
      </div>
      <div className="category">
        <span className="category-icon">🔥</span>
        <span className="category-label">Ofertas</span>
      </div>
      <style>{styles}</style>
    </div>
  );
};

export default SubCategories;

// Styles
const styles = `
.sub-categories-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #212121;
  padding: 1rem;
  border-radius: 10px;
  max-width: 850px;
  margin: 10px auto auto auto;
}

.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

.category-icon {
  font-size: 1.5rem;
}

.category-label {
  margin-top: 0.5rem;
  font-size: 1rem;
}
`;
