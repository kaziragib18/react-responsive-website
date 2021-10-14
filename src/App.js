import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from '../src/Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/booking/:serviceId">
            <Booking></Booking>

          </Route>

          
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
      
      
    </div>
  );
}

export default App;
