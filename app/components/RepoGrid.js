import React from "react";
import PropTypes from "prop-types";
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
  FaAccessibleIcon,
} from "react-icons/fa";

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

export function RepoGrid(props) {
  return (
    <ul className="grid space-around">
      {props.repos.map(function (repo, index) {
        const {
          name,
          owner,
          html_url,
          stargazers_count,
          forks,
          open_issues,
        } = repo;
        const { avatar_url, login } = owner;

        return (
          <li key={html_url} className="repo bg-light">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items card-list">
              <li>
                <img
                  className="avatar"
                  src={avatar_url}
                  alt={"Avatar for " + login}
                />
              </li>
              <li>
                <FaUser color="rgb(255, 191, 116)" size={22} />
                <a href={html_url}>@{login}</a>
              </li>
              <li>
                <FaStar color="rgb(255, 215, 0)" size={22} />
                {stargazers_count} starts
              </li>
              <li>
                <FaAccessibleIcon color="rgb(129, 195, 0)" size={22} />
                {forks} forks
              </li>
              <li>
                <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
                open {open_issues}
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};
