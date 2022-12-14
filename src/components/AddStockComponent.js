import { Component } from "react";
import StockService from "../services/StockService";

class AddStock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: []
        }
    }
    getAllCompanies() {
        StockService.getAllCompanies().then(
            (response) => {
                (this.setState({ companyList: response.data }))
            }
        );
    }
    componentDidMount() {
        this.getAllCompanies();
    }


    addStock() {

        if(this.state.companyCode===""||this.state.companyCode===null)
        {
            alert("please select  company");
            return false;

        }
        StockService.addStock(this.state).then(
            (response) => {
                if (response.status === 200) {
                    alert("Added Stock Succesfully");
                    window.location = "/home";
                }
            }
        )

    }

    render() {
        return (
            <div>
                <h2>Add Stock Price</h2>
                <div>
                    <div className="container">
                        {/* Company :<input type="text" onChange={(e) => { this.setState({ companyCode: e.target.value }) }} /><br></br> */}
                        <form onSubmit={() => this.addStock()}>
                        Company Name:  <select required name="selectList" id="selectList" onChange={(e) => { this.setState({ companyCode: e.target.value }) }}>
                            <option value="">Please select option</option>
                            {this.state.companyList.map((company) => <option key={company.companyCode} value={company.companyCode}>{company.companyName}</option>)}
                        </select><br></br><br></br>
                        StockPrice :<input type="number" required onChange={(e) => { this.setState({ stockPrice: e.target.value }) }} ></input><br></br>
                        {/* <button className="btn btn-success" onClick={() => this.addStock()}>Submit</button> */}
                       <input className='btn btn-success' type="submit" value="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default AddStock
