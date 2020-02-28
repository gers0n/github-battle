module.exports = function Product(data) {
  this.Id = data.lastId+1 || 1;
  this.Name = data.Name || "";
  this.Price = data.Price || "";
  this.Company = data.Company || {};
  this.Amount = data.Amount || 0;
  return this;
};
