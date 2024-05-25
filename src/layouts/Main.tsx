import React, { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import SubCategories from "../components/SubCategories";
import Categories from "../components/Categories";
import PopularGamesList from "../components/PopularGameList";
import NewsCarousel from "../components/NewsCarousel";
import DiscountCardList from "../components/DiscountCard";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main className="banner-content">
        <MainBanner />
        <div className="main-content">
          <div className="sub-categories">
            <SubCategories />
          </div>
          <div className="categories-popular-games">
            <Categories />
            <div className="popular-games-container">
              <PopularGamesList />
              <div className="news-carousel-container">
                <NewsCarousel /> 
              </div>
              <div className="discount-card-container">
                <DiscountCardList />
              </div>
            </div>
          </div>
          {children}
        </div>
      </main>
      <style>{`
        body {
          background-color: #161616;
          font-family: 'Quicksand', sans-serif;
        }

        .main-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .sub-categories {
          width: 100%;
        }
        .categories-popular-games {
          display: flex;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }
        .categories-popular-games > div {
          margin: 8px;
        }
        .popular-games-container {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .popular-games {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }
        .news-carousel-container{
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;    
        }
        .discount-card-container {
            display: flex;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          }
        @media (max-width: 768px) {
          .categories-popular-games {
            flex-direction: column;
            align-items: center;
          }
          .categories-popular-games > div {
            width: 100%;
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default MainLayout;
