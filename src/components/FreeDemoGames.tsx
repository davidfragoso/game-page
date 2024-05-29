import React, { useState } from 'react';
import ViewAllButton from "./ViewAllButton";
import { styled } from "@mui/system";

const games = {
  free: [
    {
      title: "Halo Infinite Multiplayer",
      image:
        "https://cdn.vox-cdn.com/thumbor/8GhdBjaKTlW0mUbjIz2fVgYBDkg=/0x0:1432x799/1400x1400/filters:focal(716x400:717x401)/cdn.vox-cdn.com/uploads/chorus_asset/file/22656116/haloinfinitemultiplayer.png",
      price: "Gratis",
      rating: "9.2 / 10",
    },
    {
      title: "Destiny 2",
      image: "https://i1.sndcdn.com/artworks-000662136178-pk88pz-t500x500.jpg",
      price: "Gratis",
      rating: "9.5 / 10",
    },
    {
      title: "World of Tanks",
      image:
        "https://images.sftcdn.net/images/t_app-icon-m/p/addf6122-1b45-43ea-9f3b-720c22c7d342/1940526982/world-of-tanks-blitz-download-World-of-Tanks-Blitz.jpg",
      price: "Gratis",
      rating: "9.0 / 10",
    },
  ],
  demos: [
    {
      title: "Silent Hill P.T",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/P.T.logo.jpg/1200px-P.T.logo.jpg",
      price: "Gratis",
      rating: "9.7 / 10",
    },
    {
      title: "Far Cry 6 Free Trial",
      image:
        "https://static.displate.com/270x380/displate/2021-11-12/7bbdc394fab8ea3bcd92f9377eebb903_208a073d53fd528d58c0369ecae0821f.jpg",
      price: "Gratis",
      rating: "9.0 / 10",
    },
    {
      title: "PC Building Simulator 2",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/58/PC_Building_Simulator_2_cover_art.jpg",
      price: "Gratis",
      rating: "9.2 / 10",
    },
  ],
};

const styles = `
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  max-width: 1200px;
}

.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
}

.section {
  flex: 1;
  padding: 0 20px;
}

.section h2 {
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
}

.game-card {
  display: flex;
  align-items: center;
  background-color: #1e1e1e;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
}

.game-card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
}

.game-info {
  padding: 10px;
  flex: 1;
}

.game-info h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #fff;
}

.game-info p {
  margin: 5px 0;
  color: #aaa;
}

.game-info .rating {
  color: #0f0;
}

.divider {
  width: 1px;
  background-color: #fff;
  margin: 0 20px;
}

.see-all {
  text-align: center;
  margin: 20px 0;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .header {
    flex-direction: column;
    align-items: center;
  }

  .section {
    width: 100%;
    padding: 0;
  }

  .divider {
    display: none;
  }

  .game-card {
    width: 100%;
  }
}
`;

const FreeDemoGames = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(true);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="section">
          <h2>Mejores gratis</h2>
          {games.free.map((game, index) => (
            <div key={index} className="game-card">
              <img src={game.image} alt={game.title} />
              <div className="game-info">
                <h3>{game.title}</h3>
                <p>{game.price}</p>
                <p className="rating">{game.rating}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="divider"></div>
        <div className="section">
          <h2>Mejores Demos</h2>
          {games.demos.map((game, index) => (
            <div key={index} className="game-card">
              <img src={game.image} alt={game.title} />
              <div className="game-info">
                <h3>{game.title}</h3>
                <p>{game.price}</p>
                <p className="rating">{game.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="see-all">
        <ViewAllButton onClick={handleViewAll} />
      </div>
      <style>{styles}</style>
    </div>
  );
};

export default FreeDemoGames;
