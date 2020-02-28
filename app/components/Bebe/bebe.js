const React = require('react');
const PropTypes = require('prop-types');
// let ProductsApi = require( "./api/productsApi");
// let CompaniesApi = require( "./api/CompaniesApi");
// const Models = require( './models');

// const productsApi = ProductsApi();
// const companiesApi = new CompaniesApi();
require('./babe.css');

function Options() {
  return (<div class="options">
    <button>Create Product</button>
  </div>)
};

function ProductDetail(props){
  return (
    <ul className="productDetail" >
      {/* after add the image to the product*/}
      <li className="Name"><span>{props.product.Name}</span></li>
      <li className="Priority"><span>{"Prioridad: "+props.product.Priority}</span></li>
      <li className="Price"><span>{"Precio: $"+props.product.Price}</span></li>
      <li className="Amount"><span>{"Cantidad: "+props.product.Amount}</span></li>
      <li className="Company"><span>{props.product.Company ? "en "+props.product.Company.Name : "" }</span></li>
    </ul>
  )
};

class CreateProduct  extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = props.handleSubmit.bind(this);
  }
  render(){
    return (
      <form>
      </form>
    )
  }
};

class Products extends React.Component  {
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  };
  componentDidMount(){
    this.setState({products: this.props.products});
  }
  handleProducts(event){

  };
  render(){
    return (
      <div>
        <ul className="products">
          {this.props.products.map(function(product){
              return (
                <li key={product.Id} className="product">
                  <ProductDetail product={product} />
                </li>
              )
            })}
        </ul>
      </div>
    )
  }
};

function ProductsTotal(props){
  let total = 0;
  props.products.map(function(product){
    total += product.Price*product.Amount;
  });
  return (
    <div className="totalContainer">
      <span className="total">Total: ${total}</span>
    </div>
  )
};
class ListProduct  extends React.Component {
  // constructor(props){
  //   super(props);
  //
  //   this.setState(function(){
  //     return {data: props.products};
  //   })
  // }
  render(){
    return (
      // <Options />
      <div>
        <ProductsTotal products={this.props.products} />
        <Products products={this.props.products}/>
      </div>
    )
  }
};

CreateProduct.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

module.exports = class Bebe extends React.Component  {
  constructor(props){
		super(props);
		this.state = {
			isCreating: false,
      products: []
		};

    this.handleCreation = this.handleCreation.bind(this);
  }
  componentDidMount(){
    this.setState(function(props){
      return {products: [
        {Name: "Shampoo", Price:190, Id:1, Company: {Id: 2, Name: "Jumbo"}, Amount: 1, Priority: 10},
        {Name: "Cambiador de Panal", Price:150, Id:2, Company: {Id: 2, Name: "Jumbo"}, Amount: 1, Priority: 10},
        {Name: "Juego de gorritos", Price:220, Id:3, Company: {Id: 1, Name: "La Sirena"}, Amount: 1, Priority: 10},
        {Name: "Guantecitos", Price:45, Id:4, Company: {Id: 1, Name: "La Sirena"}, Amount: 1, Priority: 10},
        {Name: "Product 4", Price:3530, Id:5, Company: {Id: 1, Name: "La Sirena"}, Amount: 1, Priority: 10},
        {Name: "Product 5", Price:430, Id:6, Company: {Id: 2, Name: "Jumbo"}, Amount: 1, Priority: 10}
      ]}
    })
  }
  handleCreation(event){
    this.props.handleCreation();
  }
  render(){
    return (<div>
      {this.isCreating
        ? <CreateProduct handleCreation={this.handleCreation}/>
        : <ListProduct isCreating={this.state.isCreating} products={this.state.products}/>}
    </div>)
  }
};
