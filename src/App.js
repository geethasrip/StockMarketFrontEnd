import logo from './logo.svg';
import './App.css';
import CompanyListComponent from './components/CompanyListComponent';
import AuthComponent from './components/Auth';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
   {/* <CompanyListComponent></CompanyListComponent> */}

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthComponent/>}>
        <Route path="/home" element={<CompanyListComponent />} />
        
      </Route>
    </Routes>
    </BrowserRouter>
      
     
    </div>
  );
}

export default App;
