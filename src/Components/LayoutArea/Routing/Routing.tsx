import { Redirect, Route, Switch } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Employees from "../../EmployeesArea/Employees/Employees";
import EmployeesDetails from "../../EmployeesArea/EmployeesDetails/EmployeesDetails";
import Home from "../../HomeArea/Home/Home";
import OurStory from "../../OurStoryArea/OurStory/OurStory";
import ProdcutList from "../../ProductsArea/ProdcutList/ProdcutList";
import Page404 from "../../SharedArea/Page404/Page404";
import Loadable from "react-loadable";
import "./Routing.css";
import PleaseWait from "../../SharedArea/PleaseWait/PleaseWait";
import AddEmployee from "../../EmployeesArea/AddEmployee/AddEmployee";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Switch>
                <Route path="/home" component={Home} exact/>
                <Route path="/products" component={ProdcutList}  />
                <Route path="/succses-story" component={OurStory} exact/>
                <Route path="/about" component={Loadable({ loader: () => import("../../AboutArea/About/About"), loading: PleaseWait })} exact />
                <Route path="/employees" component={Employees} exact/>
                <Route path="/employees/details/:id" component={EmployeesDetails} exact/>
                <Route path="/employees/addEmployee" component={AddEmployee} exact/>
                <Redirect from="/" to="/home" exact/>
                <Route component={Page404}/>
            </Switch>
        </div>
    );
}

export default Routing;
