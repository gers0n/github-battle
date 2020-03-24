import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Popular from './Popular'
import Nav from './Nav'
import Battle from './Battle'
import Results from './Results'
import Home from './Home'

class App extends React.Component {
  render(){
    // TODO Note: Add basename for github pages and also add a webpack config only for bh-pages
    // /*basename="/github-batle/"*/
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch basename="/">{/*render only an expecific route*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
            <Route render={function(){
              return <p>Not Found</p>;
            }}/>
          </Switch>
        </div>
      </Router>
    )
  }
};

module.exports = App;
