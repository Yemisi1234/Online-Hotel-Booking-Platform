import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import Home from "./bookings/Home";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import TopNavBar from './components/TopNavBar'




function App() {
  return (
  
    <BrowserRouter>
   <TopNavBar />
    <Switch>
      <Route exact path ="/" component = {Home} />
      <Route exact path ="/login" component = {Login} />
      <Route exact path =  "/signup" component = {Signup} />
    </Switch>


    </BrowserRouter>
  
  

  );
}

export default App;
