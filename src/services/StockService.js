import axios from "axios";
const URL="https://stockmarket-api-gateway.azuremicroservices.io/api/v1.0/market/company"
const StockURL="https://stockmarket-api-gateway.azuremicroservices.io/api/v1.0/market/stock"
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