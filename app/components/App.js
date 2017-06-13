var React = require('react'),
	Popular = require('./Popular'),
	ReactRouter = require('react-router-dom'),
	Nav = require('./Nav'),
	Battle = require('./Battle'),
	Home = require('./Home');

var Router = ReactRouter.BrowserRouter,
	Switch = ReactRouter.Switch,
	Route = ReactRouter.Route;

class App extends React.Component {
	render(){
		return (
			<Router>
				<div className="container">
					<Nav />
					<Switch>{/*render only an expecific route*/}
						<Route exact path="/" component={Home} />
						<Route path="/battle" component={Battle} />
						<Route path="/popular" component={Popular} />
						<Route path="/popular" component={Popular} />
						<Route render={function(){
							return <p>Not Found</p>;
						}}/>
					</Switch>
				</div>
			</Router>
		)
	}
};

module.exports = App;