import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../src/pages/Home';
import Filmography from './pages/Filmography';
import Discography from './pages/Discography';
import Footer from './components/Footer';
import Profile from './pages/Profile';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/filmography">
            <Filmography />
          </Route>
          <Route path="/discography">
            <Discography />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
