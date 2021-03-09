import axios from "axios";
import { stringify } from "querystring";
import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import EmployeesModel from "../../../Model/EmployeesModel";
import globals from "../../../Service/Globals";
import PleaseWait from "../../SharedArea/PleaseWait/PleaseWait";
import "./EmployeesDetails.css";

interface RouteParams {
    id: string;
}

interface EmployeesDetailsProps extends RouteComponentProps<RouteParams> {

}

interface EmployeesDetailsState {
    employee: EmployeesModel;
}

class EmployeesDetails extends Component<EmployeesDetailsProps, EmployeesDetailsState>{

    public constructor(props: EmployeesDetailsProps) {
        super(props);
        this.state = { employee: null }
    }
    public async componentDidMount() {
        try {
            const response = await axios.get<EmployeesModel>(globals.employeesUrl + this.props.match.params.id);
            this.setState({ employee: response.data })
        }
        catch (err) {
            alert(err);
        }

    }

    public render(): JSX.Element {
        return (
            <div className="EmployeesDetails">
                {this.state.employee === null && <PleaseWait/>}
                {this.state.employee &&
                    <>
                        <p><img src={globals.employeesUrl + "/images/" + this.state.employee.imageName} /></p>
                        <h2>{this.state.employee.firstName + " " + this.state.employee.lastName}</h2>
                        <p>{this.state.employee.title}</p>
                        <p>{this.state.employee.birthDay}</p>
                        <p>{this.state.employee.country}</p>
                        <p>{this.state.employee.city}</p>
                    </>
                }

            </div>
        )
    }
}

export default EmployeesDetails;
