const Product = require("../models").Product;
const Company = require("../models").Company;
const CompaniesApi = require("./companies");

module.exports = function ProductsApi(){
  let products = [
    new Product({Name: "Product 1", Price:100, Id:1, Company: CompaniesApi.getCompanyById(0)}),
    new Product({Name: "Product 2", Price:240, Id:2, Company: CompaniesApi.getCompanyById(0)}),
    new Product({Name: "Product 3", Price:40, Id:3, Company: CompaniesApi.getCompanyById(0)}),
    new Product({Name: "Product 4", Price:3530, Id:4, Company: CompaniesApi.getCompanyById(0)}),
    new Product({Name: "Product 5", Price:430, Id:5, Company: CompaniesApi.getCompanyById(1)}),
  ];
  this.getProductById =function(id){
    if(id > products.length -1) return {};
    return products[id]
  };
  this.getProductByName =function(name){
    let _product = {};
    products.map(function(product){
      if(product.Name === name){
        _product = product
      }
    });
    return _product;
  };
  return this;
  /*for later, be able to filter or get by company name or price*/
}
