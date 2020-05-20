import React from "react";
import PropTypes from "prop-types";
import api from "../utils/api";
import Loading from "../components/Loading";
import { RepoGrid } from "../components/RepoGrid";

/*this is a stateless component*/
const SelectLanguage = (props) => {
  var languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="languages">
      {languages.map((language) => {
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
  onSelect: PropTypes.func.isRequired,
};

export default class Popular extends React.Component {
  state = {
    selectedLanguage: "All",
    repos: [],
  };
  componentDidMount() {
    /*invoke by react before construc UI*/
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage = (lang) => {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repos: [],
      };
    });

    api.fetchPopularRepos(lang).then(
      function (repos) {
        this.setState(function () {
          return { repos: repos };
        });
      }.bind(this)
    );
  };
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
