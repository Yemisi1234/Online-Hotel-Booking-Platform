//import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Route , path} from 'react-router-dom'
import Homescreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import Registerscreen from "./screens/Registerscreen";
import 'antd/dist/antd.css';
import Bookingscreen from "./screens/Bookingscreen";
import Profilescreen from "./screens/Profilescreen";
import Landingscreen from "./screens/Landingscreen";
import Adminscreen from "./screens/Adminscreen";
import Hotelscreen from  "./screens/Hotelscreen";
import Login from "./screens/Login";
// import Homescreen from "./screens/Homescreen"

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      
         <Route path="/" exact component={Landingscreen}/>
         <Route path="/home" exact component={Homescreen}/> 
         {/* <Route path="/login" exact component={Loginscreen}/> */}
         <Route path="/login" exact component={Login}/>
         <Route path="/register" exact component={Registerscreen}/>
         <Route path="/book/:roomid/:fromdate/:todate" exact component={Bookingscreen}/>
         <Route path="/profile" exact component={Profilescreen}/>
         <Route path="/admin" exact component={Adminscreen}/>
         <Route path="/Hotels" exact component={Hotelscreen}/>
         <Route path="/home/:hotelName" exact component={Homescreen}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
