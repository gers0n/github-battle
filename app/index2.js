require('whatwg-fetch');

var React = require("react"),
	ReactDom = require("react-dom"),
	Hello = require("./components/hello.jsx");

ReactDom.render(
	<Hello />,
	document.getElementById("app")
);


