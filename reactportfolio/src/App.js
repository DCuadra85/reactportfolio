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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
      <Navbar />
    <Switch>
      <Route exact path={["/", "/aboutme"]}>
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
