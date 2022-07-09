import { Component } from "react";
import StockService from "../services/StockService";

class CompanyListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: []
        }
    }
componentDidMount(){
    this.getAllCompanies();
}
getAllCompanies(){
   StockService.getAllCompanies().then(
    (response)=>{
        (this.setState({companyList:response.data}))
    }
);
}
 
handleDelete(companyCode){
    StockService.handleDelete(companyCode).then(
     (response)=>{
     alert(response.data);
     this.getAllCompanies();
     }
 );
 }
   

    render() {
        return (
            <div>
                <h2 className="text-center">Company List </h2>
                <table className="table table-stripped">
                  <thead>
                    <tr className="bg-info text-white" >
                    <td>CompanyName</td>
                    <td>CEO</td>
                    <td>TurnOver</td>
                    <td>Website</td>
                    <td>Stock Price</td>
                    <td>Type of Exchange</td>
                    <td>Operation</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       this.state.companyList.map((company)=>(
                            <tr key="company.companyCode">
                                <td>{company.companyName}</td>
                                <td>{company.companyCEO}</td>
                                <td>{company.companyTurnover}</td>
                                <td>{company.companyWebsite}</td>
                                <td>{company.stockPrice}</td>
                                <td>{company.stockExchange}</td>
                                <td>
                  <button className="btn btn-warning m-2" onClick={() => this.handleDelete(company.companyCode)}>
                    DELETE
                  </button>
                  
                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>
        )
    }

}
export default CompanyListComponent