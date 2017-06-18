var React = require('react'),
	// Link = require('react-router-dom').Link,/*only to display a url or link*/
	NavLink = require('react-router-dom').NavLink; //to change some state depending if your at that dir

function Nav(){
	return (
		<ul className="nav">
			<li>
				<NavLink exact activeClassName="active" to="/">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName="active" to="/battle">
					Battle
				</NavLink>
			</li>
			<li>
				<NavLink activeClassName="active" to="/popular">
					Popular
				</NavLink>
			</li>
		</ul>
	)
};

module.exports = Nav;