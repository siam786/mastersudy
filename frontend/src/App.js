import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notfound from "./Pages/Notfound/Notfound";
import Booking from "./Pages/Home/Details/Details";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRouter from "./Pages/Login/PrivateRouter/PrivateRouter";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import Weoffer from "./Pages/Weoffer/Weoffer";
import AddService from "./Pages/AddService/AddService";
import MangaService from "./Pages/MangaService/MangaService";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/weoffer">
              <Weoffer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRouter path="/addservice">
              <AddService />
            </PrivateRouter>
            <PrivateRouter path="/details/:id">
              <Booking></Booking>
            </PrivateRouter>
            <PrivateRouter path="/MangaService">
              <MangaService></MangaService>
            </PrivateRouter>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
