module.exports = function BebeProduct(data) {
  this.Id = data.lastId+1 || 1;
  this.Product= data.Product;
  this.Amount = data.Amount || 0;
  return this;
};
