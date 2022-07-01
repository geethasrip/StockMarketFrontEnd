import axios from "axios";
const URL="http://localhost:8087/api/v1.0/market/company"
class StockService{

    getAllCompanies(){
       return axios.get(`${URL}/getall`);
    }
}

export default new StockService()