import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Marketplace from "./Pages/Marketplace";
import About from "./Pages/About";
import AuctionPage from "./Pages/AuctionPage";
import CreateForm from "./Pages/CreateForm";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
        <Route path="/auction/:id" element={<AuctionPage />} />
        <Route path="/create" element={<CreateForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
