var React = require('react');

var Image = React.createClass({
	render: function(){ 
		return <img str={this.props.url} />
	}
});

module.expoorts = Image;