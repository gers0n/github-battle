var React = require('react');
var ReactDom = require('react-dom');
require("./index.css")
/*React.createClass()*/
var PropTypes = require('prop-types');

// state
// lifecycle event
// UI *required this allway need to be set


class Users extends React.Component {
	render(){
		var friends = this.props.list.filter(function(user){
			return user.friend === true;
		});
		var noFriends = this.props.list.filter(function(user){
			return user.friend === false;
		});
		return (
			<div>
				<h1>Friends</h1>
				<ul>
					{
						friends.map(function(user){
							return (
								<li key={user.name}>{user.name}</li>
							)
						})
					}
				</ul>
				<h1>No Friends</h1>
				<ul>
					{
						noFriends.map(function(user){
							return (
								<li key={user.name}>{user.name}</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
};

class Badge extends React.Component {
	render() {
		return (
			<div>
				<img src={this.props.img}
					alt="avatar"
					style={{width: 100, height: 100}}
				/>
				<h1>Name: {this.props.name}</h1>
				<h3>Username: {this.props.username}</h3>
			</div>
		)
	}
};

Badge.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired
};

Users.PropTypes = {
	// list: PropTypes.array.isRequired
	// list: PropTypes.arrayOf(PropTypes.object)
	list: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		friend: PropTypes.bool.isRequired
	}))
};

var App = require('./components/App');

ReactDom.render(
	// <Users 
	// 	list={[
	// 		{name:"Tyler", friend:true},
	// 		{name:"Ryan", friend:true},
	// 		{name:"Michael", friend:false},
	// 		{name:"Jessica", friend:false}
	// 	]}/>,
	// <Badge 
	// 	img="https://avatars0.githubusercontent.com/u/2933430?v=3&s=460"
	// 	name="Julian"
	// 	username="juliancpt"
	// />,
	<App />,
	document.getElementById('app')
);