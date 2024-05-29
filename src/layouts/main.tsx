import React, { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import SubCategories from "../components/SubCategories";
import Categories from "../components/Categories";
import PopularGamesList from "../components/PopularGameList";
import NewsCarousel from "../components/NewsCarousel";
import DiscountCardList from "../components/DiscountCard";
import GamePassList from "../components/GamePassCard";
import FreeDemoGames from "../components/FreeDemoGames";
import Table from "../components/Table";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <div className="banner-content">
        <MainBanner />
      </div>
      <main className="main-content">
        <div className="sub-categories">
          <SubCategories />
        </div>
        <div className="categories-popular-games">
          <div className="categories-game-pass">
            <Categories />
            <GamePassList />
          </div>
          <div className="popular-games-container">
            <PopularGamesList />
            <div className="news-carousel-container">
              <NewsCarousel />
            </div>
            <div className="discount-card-container">
              <DiscountCardList />
            </div>
            <FreeDemoGames />
          </div>
        </div>
        {children}
        <Table />

      </main>
      <Footer />
      <style>{`
        body {
          background-color: #161616;
          font-family: 'Quicksand', sans-serif;
        }
        .banner-content {
          height: 95vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .main-content {
          padding: 2.8rem;
          width: 100%;
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
        .categories-game-pass {
          display: flex;
          flex-direction: column;
          width: 200px;
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
        .news-carousel-container {
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
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 992px) {
          .banner-content {
            height: 70vh;
          }
          .categories-popular-games {
            flex-direction: column;
            align-items: center;
          }
          .categories-game-pass {
            width: 100%;
            flex-direction: column;
          }
        }
        @media (max-width: 768px) {
          .banner-content {
            height: 60vh;
          }
          .categories-popular-games {
            flex-direction: column;
            align-items: center;
          }
          .categories-popular-games > div {
            width: 100%;
            margin: 0.5rem 0;
          }
          .discount-card-container {
            flex-direction: column;
            align-items: center;
          }
          .categories-game-pass {
            width: 100%;
          }
        }
        @media (max-width: 576px) {
          .banner-content {
            height: 50vh;
          }
        }
      `}</style>
    </>
  );
};

export default MainLayout;
