import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <AppBar position="static"
    sx={{
      padding: "1rem",
      backgroundColor: 'rgba(0,0,0,0)',
      fontFamily: 'Roboto',
      boxShadow: 'none'
    }}>
        <Toolbar
        sx={{
          gap: "3rem",
          alignItems: "center",
        }}>
            <Link to="/" className="nav-link first-link">Musix</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/marketplace" className="nav-link">Marketplace</Link>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;