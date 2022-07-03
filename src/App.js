 import logo from './logo.svg';
import './App.css';
import CompanyListComponent from './components/CompanyListComponent';
import LoginComponent from './components/LoginComponent';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import withNavigation from './components/withNavigation';
import withParams from './components/params';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import LogoutComponent from './components/LogoutComponent';
import RegisterCompany from './components/RegisterCompany';
import AddStock from './components/AddStockComponent';
function App() {
   const LoginComponentWithNavigation = withNavigation(LoginComponent);

   	const CompanyListComponentWithParams = withParams(CompanyListComponent);

     	const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

    	
  return (
    <div className="App">
   <BrowserRouter>
   <HeaderComponentWithNavigation/>
    <Routes>
    <Route path="/" element={<LoginComponentWithNavigation />} />
		<Route path="/login" element={<LoginComponentWithNavigation />} />
    <Route path="/logout" element={<LogoutComponent/>} />
    <Route path="/registerCompany" element={<AuthenticatedRoute><RegisterCompany/></AuthenticatedRoute>} />
    <Route path="/addStock" element={<AuthenticatedRoute><AddStock/></AuthenticatedRoute>}/>
        <Route path="/home" element={<AuthenticatedRoute><CompanyListComponentWithParams/></AuthenticatedRoute>} />

    </Routes>
    </BrowserRouter>
      
     
    </div>
  );
}

export default App;
