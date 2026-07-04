import Navbar from "./navbar/navbar";
import AppRouter from "./AppRouter";
import Footer from "./footer/footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
