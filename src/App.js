import "./App.css"
import CarouselPage from './components/CarouselPage';
import NavbarPage from './components/NavbarPage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Tabs from './components/Tabs';
import { FooterContainer } from "./components/footer/Footer";
import Signup from './components/SignUp'


function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/SignUp">
            <Signup/>
          </Route>

          <Route path="/">
            <NavbarPage />
            <CarouselPage />
            <br></br>
            <Tabs />
            <FooterContainer />
            </Route>

        </Switch>
       
      </Router>
     
        {/* <FooterPage /> */}
    </div>
    
  );
}
export default App;

