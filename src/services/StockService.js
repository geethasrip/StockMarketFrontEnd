import axios from "axios";
const URL="http://localhost:8081/api/v1.0/market/company"
const StockURL="http://localhost:8089/api/v1.0/market/stock"
class StockService{

    getAllCompanies(){
       return axios.get(`${URL}/getall`);
    }
    saveCompany(company){
        return axios.post(`${URL}/register`,company);
    }

    addStock(stock){
        return axios.post(`${StockURL}/add`,stock);
    }
    handleDelete(companyCode)
    {
        return axios.delete(`${URL}/delete/${companyCode}`)
    }
}





export default new StockService()