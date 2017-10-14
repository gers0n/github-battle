
var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id="+id+"&client_scret="+sec;
var githubApiUsers = 'https://api.github.com/users/';
function getProfile(username){
	return axios.get(githubApiUsers + username+params)
		.then(function(user){
			return user.data;
		});
};

// getProfile('tylermcginnis')
// 	.then(function(data){

// 	});


function getRepos(username){
	return axios.get(githubApiUsers + username+"/repos"+params+"&per_page=100")
};

function getStarCount(repos){
	return repos.data.reduce(function(count,repo){
		/*count = 0 passed, repo = first item inside repos.data*/
		return count+repo.stargazers_count;
	}, 0);
};

function calculateScore(profile, repos){
	var followers = profile.followers;
	var totalStart = getStarCount(repos);

	return (followers * 3) + totalStart;
};

function handleError(error){
	console.warn(error);
	return null;
};

function getUserData(players){
	return axios.all([
		getProfile(players),
		getRepos(players)
	]).then(function(data){
		let profile = data[0],
			repos = data[1];

		return {
			profile: profile,
			score: calculateScore(profile, repos)
		};
	})
};

function sortPlayers(players){
	return players.sort(function(a, b){
		return b.score - a.score;
	})
}
module.exports = {
	battle: function(players){
		return axios.all(players.map(getUserData))
		.then(sortPlayers)
		.catch(handleError)
	},
	fetchPopularRepos: function(language){
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

		return axios.get(encodedURI)
			.then(function(response){
				return response.data.items;
			});
	}
};

// fetchPopularRepos('Java')
// 	.then(function(res){

// 	});
