var React = require('react');
var PropTypes = require('prop-types');


/*this is a stateless component*/
function SelectLanguage  (props) {
	var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

	return (
		<ul className="languages">
			{languages.map((language) => {
				return (
					<li 
						style={language === props.selectedLanguage ? {'color':'#d0021b'} : null}
						onClick={props.onSelect.bind(null, language)}
						key={language}>
						{language}
					</li>
				)
			})}
		</ul>
		)
};

// class SelectLanguage extends React.Component {
// 	render(){
// 		var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
// 		return (
// 			<ul className="languages">
// 				{languages.map((language) => {
// 					return (
// 						<li 
// 							style={language === this.props.selectedLanguage ? {'color':'#d0021b'} : null}
// 							onClick={this.props.onSelect.bind(this, language)}
// 							key={language}>
// 							{language}
// 						</li>
// 					)
// 				}, this/*pass current binding to its scope*/)}
// 			</ul>
// 			)
// 	}
// };

SelectLanguage.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
};


class Popular extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}
	updateLanguage(lang) {
		console.log(lang);
		this.setState(function() {
			return {
				selectedLanguage: lang
			}
		});
	}
	render(){
		return (
			<div>
				<SelectLanguage 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
			</div>
		)
	}
};

module.exports = Popular;