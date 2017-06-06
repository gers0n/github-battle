var React = require('react');
var ReactDom = require('react-dom');
require("./index.css")
/*React.createClass()*/

// state
// lifecycle event
// UI *required this allway need to be set


class App extends React.Component {
	render(){
		return (
			<div>
				Hello World!
			</div>
		)
	}
}

// <App />

ReactDom.render(
	<App />,
	document.getElementById('app')
);