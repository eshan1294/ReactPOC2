// import logo from './logo.svg';
import './App.css';
import BasicLogin from "./basiclogin"
import userDashboard from   "./userDashboard"
import AdminDashboard from "./adminDashboard"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  {  Route,NavLink,BrowserRouter} from "react-router-dom"

function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
     {/* <></BasicLogin> */}
     <Route exact path="/" component={BasicLogin}></Route>
     <Route path="/admin" component={AdminDashboard}></Route>
     <Route path="/user" component={userDashboard}></Route>
     </BrowserRouter>
     </div>
    
  );
}

export default App;
