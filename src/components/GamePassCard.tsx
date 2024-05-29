import React from 'react';

const GamePassCard = () => {
  const gamePasses = [
    {
      name: 'Game Pass',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQGWVnuyvgwzZm4aFkNwvM0jQ6AGvLFKe2A&usqp=CAU'
    },
    {
      name: 'PlayStation Now',
      image: 'https://i.pinimg.com/736x/28/c0/3e/28c03ecb39cd3308f72151bf6b7e9152.jpg'
    },
    {
      name: 'EA Play',
      image: 'https://static.tweaktown.com/news/8/8/88620_1_ea-to-mold-franchises-around-4-concepts-watch-play-create-connect_full.png'
    },
    {
      name: 'Steam',
      image: 'https://static.vecteezy.com/system/resources/previews/006/892/625/original/discord-logo-icon-editorial-free-vector.jpg'
    }
  ];

  return (
    <div className="GamePassCard">
      <h2>Disfruta Más juegos con</h2>
      <div className="gamePassContainer">
        {gamePasses.map((pass, index) => (
          <div key={index} className="gamePassItem">
            <img src={pass.image} alt={pass.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePassCard;

// Styles
const styles = `
.GamePassCard {
  text-align: center;
  color: white;
}

.gamePassContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  justify-content: center;
}

.gamePassItem {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
}

.gamePassItem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 768px) {
  .gamePassContainer {
    grid-template-columns: repeat(3, minmax(80px, 1fr));
  }

  .gamePassItem {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .gamePassContainer {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }

  .gamePassItem {
    width: 100px;
    height: 100px;
  }
}
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
