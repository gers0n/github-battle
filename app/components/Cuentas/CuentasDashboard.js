const React = require('react'),
  PropTypes = require('prop-types'),
  Acreditacion = require('./Cuentas');


let acreditaciones = [
  { 
    Nombre:"Prestamo 1" ,
    Entidad:"Alaber" ,
    AcuerdoPago:"Credito"/*Doc X pagar*/,
    Tipo:"Documento",
    Cantidad: 40000,
    FechaPago:"16"/*dia del pago del mes*/,
    /*PagosRealizados=0*/
  },
  { 
    Nombre:"Anillo",
    Entidad:"Leo",
    AcuerdoPago:"Credito",
    Tipo:"Cuenta",
    Cantidad: 400,
    FechaPago:"",
  },

  { 
    Nombre:"Venta Pasta glister",
    Entidad:"Suegra de la Cocoa",
    AcuerdoPago:"Debito",
    Tipo:"Cuenta",
    Cantidad: 400,
    FechaPago:"",
  }
];

class Dashboard extends React.Component {
  render(){
    return (
      <div>
        <div className="">
          <button>Agregar Cuenta</button>
        </div>
        <ul className="acreditaciones">
          {
            acreditaciones.map((acreditacion, index) => {
              return (
                <li key={acreditacion.Nombre}>
                  <Acreditacion 
                    Nombre={acreditacion.Nombre}
                    Entidad={acreditacion.Entidad}
                    AcuerdoPago={acreditacion.AcuerdoPago}
                    Tipo={acreditacion.Tipo}
                    Cantidad={ acreditacion.Cantidad}
                    FechaPago={acreditacion.FechaPago}
                  >
                    <button>Editar</button>
                  </Acreditacion>
                </li>
              )
            }) 
          }
        </ul>
      </div>
    )
  }
};

module.exports = Dashboard;