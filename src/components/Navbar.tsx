import React, { ReactNode } from "react";
import Avatar from "./Avatar"; // Asegúrate de que este componente esté disponible

interface CustomAppBarProps {
  children: ReactNode;
}

const CustomAppBar = ({ children }: CustomAppBarProps) => (
  <div className="CustomAppBar">
    <div className="CustomAppBar-background" />
    {children}
  </div>
);

interface ToolbarProps {
  children: ReactNode;
}

const Toolbar = ({ children }: ToolbarProps) => (
  <div className="Toolbar">
    {children}
  </div>
);

interface SearchProps {
  children: ReactNode;
}

const Search = ({ children }: SearchProps) => (
  <div className="Search">
    {children}
  </div>
);

const InputBase = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className="InputBase"
  />
);

interface SearchIconWrapperProps {
  children: ReactNode;
}

const SearchIconWrapper = ({ children }: SearchIconWrapperProps) => (
  <div className="SearchIconWrapper">
    {children}
  </div>
);

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: LinkProps) => (
  <a href={href} className="Link">
    {children}
  </a>
);

const Navbar = () => {
  return (
    <CustomAppBar>
      <Toolbar>
        <div className="LogoContainer">
          <img src="../img/fragosodev.png" alt="Logo" className="Logo" />
        </div>
        <div className="MenuIcon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
        <Search>
          <SearchIconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </SearchIconWrapper>
          <InputBase placeholder="Buscar..." />
        </Search>
        <div className="LinksContainer">
          <Link href="#">Descubrir</Link>
          <Link href="#">Noticias</Link>
          <Link href="#">Mis juegos</Link>
          <Link href="#">Descargas</Link>
          <Link href="#">Lista de deseos</Link>
        </div>
        <div className="AvatarContainer">
          <Avatar />
        </div>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;

// Styles
const styles = `
.CustomAppBar {
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 0.5rem 1rem;
  color: white; /* Ensure text is white */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.CustomAppBar-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px); /* Adjust the blur value as needed */
  z-index: -1;
}

.Toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.LogoContainer {
  display: flex;
  align-items: center;
}

.Logo {
  width: 120px;
}

.Search {
  position: relative;
  margin-left: 2rem;
  flex-grow: 1;
}

.InputBase {
  color: inherit;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  padding: 0.5rem 2rem;
  transition: width 0.3s ease;
  width: 200px;
  max-width: 100%;
}

.InputBase::placeholder {
  color: rgba(255, 255, 255, 0.75); /* Make the hint text more white */
}

.InputBase:focus {
  width: 250px;
}

.SearchIconWrapper {
  position: absolute;
  left: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
}

.Link {
  color: #fff; /* Ensure link text is white */
  text-decoration: none;
  margin: 0 1rem;
  font-weight: bold;
}

.LinksContainer {
  display: flex;
  align-items: center;
}

.AvatarContainer {
  display: flex;
  align-items: center;
}

.MenuIcon {
  display: none;
  color: white; /* Ensure icon is white */
}

@media (max-width: 768px) {
  .CustomAppBar {
    padding: 0.5rem;
  }

  .Toolbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .Search {
    margin: 0;
    width: auto;
    flex-grow: 1;
  }

  .InputBase {
    width: 100px;
  }

  .InputBase:focus {
    width: 150px;
  }

  .MenuIcon {
    display: block;
  }

  .LinksContainer {
    display: none;
  }

  .AvatarContainer {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .Search {
    margin-left: 20px;
    width: 120px;

  }

  .Toolbar {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .MenuIcon {
    margin-left: 10px;
    display: block;
  }

  .LinksContainer {
    display: none;
  }
  .Logo {
    display: none;
  }
  .AvatarContainer {
    display: flex;
    align-items: center;
  }

  .InputBase {
    width: 150px ;
  }

  .InputBase:focus {
    width: 100%;
  }
}
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
