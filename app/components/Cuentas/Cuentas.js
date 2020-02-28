const React = require('react'),
  PropTypes = require('prop-types');

require('./acreditacion.css');

class Cuenta extends React.Component {
  render(){
    return (
      <h2>Hola Cuentas</h2>
    )
  }
};


class Acreditacion extends React.Component {
  constructor(props){
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit(){
    console.info("try to edit");
  }
  render() {
    return (
      <div className="acreditacion">
        <h2 className="something">
          {this.props.Nombre}
        </h2>
        <h3>{this.props.Entidad}</h3>
        <h3>{this.props.TipoCuenta}</h3>{/*Tipo de cuenta: Credito, Debito, Auxiliar*/}
        <p>{this.props.Tipo+ ' a '+ this.AcuerdoPago === "Credito" ? 'Pagar' : 'Cobrar'}</p>
        <p>Monto total de {this.props.Cantidad}</p>
        <p>Dia de Pago {this.props.FechaPago}</p>
        <div className="acreditacion-hijo">{this.props.children}</div>
      </div>
    )
  }
};

Acreditacion.propTypes = {
  Nombre: PropTypes.string.isRequired,
  Entidad: PropTypes.string,
  AcuerdoPago: PropTypes.string.isRequired,
  Tipo: PropTypes.string.isRequired,
  Cantidad: PropTypes.number.isRequired,
  FechaPago: PropTypes.string,
  /*diaDePago:*/
  /*mesDePago:*/
};

Acreditacion.defaultProps = {
  Tipo: 'Cuenta',
  AcuerdoPago: 'Credito',
  Cantidad: 0
};



/*  <Acreditacion
    Nombre="Prestamo 1"
    Entidad="Alaber"
    AcuerdoPago="Credito"
    Tipo="Documento"
    Cantidad={40000}
    FechaPago="16"
  />*/

/* Doc x Pagar(Credito)/Doc x Cobrar(Debito)
  Prestamo Alaber
  Entidad Bancaria: Alaber
  Cantidad/Monto: x
  Fecha de pagos: x

  CxP
  Persona/Entidad
  Monto
  Fecha acordad



*/

module.exports = Acreditacion;
