import{BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import NavBar from './components/Navbar/NavBar'


function App() {
  return (
    <Router>
          <div className="App">
          <NavBar />

          <Switch>
           <Route exact path='/' component={Home}/> 
           <Route exact path='/about' component={About}/> 
          </Switch>
          <Footer />
          </div>
    </Router>
  );
}

export default App;
