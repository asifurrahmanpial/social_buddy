import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
	return (
		<div className="social-buddy">
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/" component={Body} />
					<Route exact path="/post" component={Body} />
					<Route path="/post/:postId" component={PostDetails} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
