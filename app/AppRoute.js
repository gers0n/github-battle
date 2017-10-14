var React = require('react'),
  Popular = require('./components/Popular'),
  ReactRouter = require('react-router-dom'),
  Nav = require('./components/Nav'),
  Battle = require('./components/Battle'),
  Results = require('./components/Results'),
  CuentasDashboard = require('./components/Cuentas/CuentasDashboard'),
  Home = require('./components/Home');

var Router = ReactRouter.BrowserRouter,
  Switch = ReactRouter.Switch,
  Route = ReactRouter.Route;

class AppRoute extends React.Component {
  render(){
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>{/*render only an expecific route*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route path="/Cuentas" exact component={CuentasDashboard} />
          {/*<Route path="/Cuentas/" exact component={Cuentas} />*/}
            <Route render={function(){
              return <p>Not Found</p>;
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
};

module.exports = AppRoute;
