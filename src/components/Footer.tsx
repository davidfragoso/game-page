import React from 'react';
import { styled } from '@mui/system';

const styles = `
.footer {
  background-color: #1D1D1D;
  color: #fff;
  padding: 20px 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer .logo-section,
.footer .links-section,
.footer .social-section {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.footer .logo-section img {
  margin-right: 10px;
  width: 100px;
}

.footer .links-section {
  flex-direction: column;
}

.footer .links-section a {
  color: #fff;
  text-decoration: none;
  margin: 5px 0;
}

.footer .social-section a img {
  margin-left: 15px;
  width: 35px;
  height: 35px;
}
`;

const FooterContainer = styled('footer')({});

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <div className="logo-section">
        <img src="../img/fragosodev.png" alt="Fragoso Dev Logo" />
        <span>© 2024, Fragoso Dev. Todos los derechos reservados.</span>
      </div>
      <div className="links-section">
        <a href="#">Contáctanos</a>
        <a href="#">Hacer una donación</a>
      </div>
      <div className="social-section">
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=30998&format=png&color=000000" alt="Discord" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000" alt="Twitter" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="Facebook" />
        </a>
      </div>
      <style>{styles}</style>
    </FooterContainer>
  );
};

export default Footer;
