import './App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import AnimatedVid from './components/animatedVid/AnimatedVid.jsx';
import HomePage from './components/pages/homePage/HomePage';
import Header from './components/header/Header';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';

function App() {
  return (
    <>

      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Redirect to='/' />
        </Switch>
      </Router>


    </>
  );
}

export default App;
