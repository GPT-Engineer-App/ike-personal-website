import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Quotes from "./pages/Quotes.jsx";
import MoreQuotes from "./pages/MoreQuotes.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/more-quotes" element={<MoreQuotes />} />
      </Routes>
    </Router>
  );
}

export default App;
