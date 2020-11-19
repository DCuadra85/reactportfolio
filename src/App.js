import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar"
import Footer from "./components/Footer/footer"
import Portfolio from "./pages/portfoliopage"
import AboutMe from "./pages/AboutMe"

function App() {
  return (
<>
    <div className="App">
    <Router>
      <Navbar />
    <Switch>
      <Route exact path={["/", "/aboutme", "/reactportfolio"]}>
        <AboutMe />
      </Route>
      <Route exact path="/portfolio">
      <Portfolio />
      </Route>
    </Switch>
     
      <Footer />
      </Router>
     

    </div>

</>
  );
}

export default App;
