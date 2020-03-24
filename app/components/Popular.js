import React from "react";
import PropTypes from "prop-types";
import api from "../utils/api";
import Loading from "./Loading";

/*this is a stateless component*/
const SelectLanguage = props => {
  var languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="languages">
      {languages.map(language => {
        return (
          <li
            style={
              language === props.selectedLanguage ? { color: "#d0021b" } : null
            }
            onClick={() => props.onSelect(language)}
            key={language}
          >
            {language}
          </li>
        );
      })}
    </ul>
  );
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

// function RepoItemNameLink(props){
// 	return (
// 		<h3><a hred={props.url} >{props.name}</a></h3>
// 	)
// }
// function RepoItemAtText (props){
// 	return (
// 		<h5>{props.name}</h5>
// 	)
// }
// function RepoItemFollowers(props){
// 	return (
// 		<h5>{props.followers} starts</h5>
// 	)
// }

// function RepoItemDetails(props){
// 	return (<div>
// 		<RepoItemNameLink />
// 		<RepoItemAtText />
// 		<RepoItemFollowers /></div>
// 	)
// };

// function RepoItemImage(props){
// 	return (
// 		<img src={props.image} />
// 	)
// };

// function RepoItem(props){
// 	return (<div>
// 		<RepoItemImage image={props.img}/>
// 		<RepoItemDetails />
// 	</div>)
// }

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function(repo, index) {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={"Avatar for " + repo.owner.login}
                />
              </li>
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} starts</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: []
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount() {
    /*invoke by react before construc UI*/
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage: lang,
        repos: []
      };
    });

    api.fetchPopularRepos(lang).then(
      function(repos) {
        this.setState(function() {
          return { repos: repos };
        });
      }.bind(this)
    );
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos.length > 0 ? (
          <Loading text="Downloading" speed={10} />
        ) : (
          <RepoGrid repos={this.state.repos} />
        )}
      </div>
    );
  }
}
