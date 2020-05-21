import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "../contexts/theme";
import Nav from "../components/Nav";
import Loading from "../components/Loading";
import Results from "./Results";

// lazy dynamic import from react
const Popular = React.lazy(() => import("./Popular"));
const Battle = React.lazy(() => import("./Battle"));
const Home = React.lazy(() => import("./Home"));

export default class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light",
      }));
    },
  };
  render() {
    // TODO Note: Add basename for github pages and also add a webpack config only for bh-pages
    // /*basename="/github-batle/"*/
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className="container">
            <Nav />
            <React.Suspense fallback={<Loading />}>
              <Switch basename="/">
                {/*render only an expecific route*/}
                <Route exact path="/" component={Home} />
                <Route exact path="/battle" component={Battle} />
                <Route path="/battle/results" component={Results} />
                <Route path="/popular" component={Popular} />
                <Route
                  render={() => {
                    return <p>Not Found</p>;
                  }}
                />
              </Switch>
            </React.Suspense>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}
