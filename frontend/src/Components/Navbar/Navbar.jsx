import { AppBar, IconButton, Toolbar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        padding: "1rem",
        backgroundColor: "rgba(0,0,0,0)",
        fontFamily: "Roboto, sans-serif",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          gap: "3rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <Link to="/" className="nav-link first-link">
            Musix
          </Link>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          <Link to="/marketplace" className="nav-link">
            Marketplace
          </Link>
        </div>
        {!isloggedIn ? (
          <div>
            <button className="link-wallet">
              Link Wallet
            </button>
          </div>
        ) : (
          <IconButton>
            <AccountCircleIcon
              sx={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "3rem",
              }}
            />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
