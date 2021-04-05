import axios from "axios";

class ProductsService {

  constructor() {
    let service = axios.create({
      baseURL: "https://fakestoreapi.com/products?limit=4"
    });
    this.service = service;
  }

  getAllProducts = () => {
    return this.service.get("/")
    .then(response => response.data)
  }
}



export default ProductsService;