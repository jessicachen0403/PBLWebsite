import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sell from './Sell';
import ItemDetails from './ItemDetails';
import NotFound from './NotFound';
import Account from "./Account";
import Footer from "./Footer";
import About from "./About";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop/:id">
              <ItemDetails />
            </Route>
            <Route path="/sell">
              <Sell />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
