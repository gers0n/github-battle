const Company = require("../models").Company;

module.exports  = function CompaniesApi(){
  let companies = [
    new Company({Id:1, Name: "La Sirena" }),
    new Company({Id:2, Name: "Jumbo" })
  ];
  this.getAll = function(){
    return companies;
  };
  this.getCompanyById =function(id){
    if(id > companies.length -1) return {};
    return companies[id]
  };
  this.getCompanyByName =function(name){
    let _company = {};
    companies.map(function(company){
      if(company.Name === name){
        _company = company
      }
    });
    return _company;
  };
  return this;
}
