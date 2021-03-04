import { Redirect, Route, Switch } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Home from "../../HomeArea/Home/Home";
import OurStory from "../../OurStoryArea/OurStory/OurStory";
import ProdcutList from "../../ProductsArea/ProdcutList/ProdcutList";
import Page404 from "../../SharedArea/Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/home" component={Home} exact/>
                <Route path="/products" component={ProdcutList}  />
                <Route path="/succses-story" component={OurStory} exact/>
                <Route path="/about" component={About} exact/>
                <Redirect from="/" to="/home" exact/>
                <Route component={Page404}/>
            </Switch>
        </div>
    );
}

export default Routing;
