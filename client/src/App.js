import './App.css';
import { BrowserRouter, useLocation, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import NavBar from './components/NavBar/NavBar';

// Deploy:
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ LandingPage }/>
          <Route path="/home" component={ Home }/>
          <Route path="/activities" component={ Form }/>
          <Route path="/countries/:id" component={ Detail }/>
          
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
