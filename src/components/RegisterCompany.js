import { Component } from "react";
import StockService from "../services/StockService";

class RegisterCompany extends Component {

    registerCompany() {
        StockService.saveCompany(this.state).then(
            (response) => {
               if( response.status===200){
                alert("Company Registered Succesfully");
                window.location = "/home";
                }
            }
        )
         .catch((response) => {
               alert(response.response.data.errorMessage);
            })
    }

    render() {
        return (
            <div>
                <h1>Company Registration</h1>
                <div>
                    <div className="container">
                        <form type="Post" onSubmit={() => this.registerCompany()}>
                        CompanyCode :<input type="text" required onChange={(e) => { this.setState({ companyCode: e.target.value }) }} /><br></br>
                        CompanyName :<input type="text" required onChange={(e) => { this.setState({ companyName: e.target.value }) }}></input><br></br>
                        CompanyCEO :<input type="text" required onChange={(e) => { this.setState({ companyCEO: e.target.value }) }}></input><br></br>
                        CompanyTurnover :<input type="number"  required onChange={(e) => { this.setState({ companyTurnover: e.target.value }) }}></input><br></br>
                        companyWebsite :<input type="text" required onChange={(e) => { this.setState({ companyWebsite: e.target.value }) }}></input><br></br>
                        Type Of Exchange :<input type="text"  required onChange={(e) => { this.setState({ stockExchange: e.target.value }) }}></input><br></br>
                        {/* <button className="btn btn-success" onClick={() => this.registerCompany()}>Submit</button> */}
                     <input type="submit" className="btn btn-success" value="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
    
export default RegisterCompany