var React = require('react');
var ReactDom = require('react-dom');
var {
	View,
	Text,
	Image
} = require('react-primitives');

require("./index.css")
/*React.createClass()*/
var PropTypes = require('prop-types');

// state
// lifecycle event
// UI *required this allway need to be set

class H1 extends React.Component {
	render(){
		return (<Text style={this.props.style ? this.props.style : {fontSize:32}}>{ this.props.text ? this.props.text : this.children}</Text>)
	}
};

class Users extends React.Component {
	render(){
		var friends = this.props.list.filter(function(user){
			return user.friend === true;
		});
		var noFriends = this.props.list.filter(function(user){
			return user.friend === false;
		});
		return (
			<View>
				<H1 style={{fontSize:32}} text="Friends"></H1>
				<ul>
					{
						friends.map(function(user){
							return (
								<li key={user.name}>{user.name}</li>
							)
						})
					}
				</ul>
				<H1 style={{fontSize:25}} style="No Friends"></H1>
				<ul>
					{
						noFriends.map(function(user){
							return (
								<li key={user.name}>{user.name}</li>
							)
						})
					}
				</ul>
			</View>
		)
	}
};

class Badge extends React.Component {
	render() {
		return (
			<View>
				<Image src={this.props.img}
					alt="avatar"
					style={{width: 100, height: 100}}
				/>
				<h1>Name: {this.props.name}</h1>
				<h3>Username: {this.props.username}</h3>
			</View>
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

var AppRoute = require('./AppRoute');
var Application = function(){
	return (<AppRoute />)
};
ReactDom.render(
	<Users
		list={[
			{name:"Tyler", friend:true},
			{name:"Ryan", friend:true},
			{name:"Michael", friend:false},
			{name:"Jessica", friend:false}
		]}/>,
	// <Badge
	// 	img="https://avatars0.githubusercontent.com/u/2933430?v=3&s=460"
	// 	name="Julian"
	// 	username="juliancpt"
	// />,
	// <Application />,
	document.getElementById('app')
);
