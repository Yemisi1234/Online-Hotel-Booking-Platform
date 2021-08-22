import Login from "./authentication/Login";
import "./App.css";
import Register from "./authentication/Register";
import Home from "./bookings/Home";
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import TopNavBar from './components/TopNavBar'
import Payment from "./components/Payment"
import Rooms from "./screens/Rooms"
import Hotels  from "./components/Hotels";



function App() {
  return (
  
    <BrowserRouter>
   <TopNavBar /> 
   
   <Payment />
   <Hotels />
    <Switch>
      <Route exact path ="/" component = {Home} />
      <Route exact path ="/login" component = {Login} />
      <Route exact path =  "/signup" component = {Register} />
      {/* <Route exact path ="/Hotel"  component = {Hotels} /> */}

      <Route exact path ="/Hotel/Rooms"  component = {Rooms} />
    </Switch>


    </BrowserRouter>
  
  

  );
}

export default App;
