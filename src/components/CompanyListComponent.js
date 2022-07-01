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

    render() {
        return (
            <div>
                <h2>Company List </h2>
                <table className="table table-hover">
                  
                    <th>CompanyName</th>
                    <th>CEO</th>
                    <th>TurnOver</th>
                    <th>Website</th>
                    <th>Stock Price</th>
             
                    <tbody>
                    {
                        this.state.companyList.map((company)=>(
                            <tr>
                                <td>{company.companyName}</td>
                                <td>{company.companyCEO}</td>
                                <td>{company.companyTurnover}</td>
                                <td>{company.companyWebsite}</td>
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