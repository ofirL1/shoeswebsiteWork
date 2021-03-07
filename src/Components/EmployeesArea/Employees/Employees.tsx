import axios from "axios";
import { Component } from "react";
import EmployeesModel from "../../../Model/EmployeesModel";
import globals from "../../../Service/Globals";
import EmployeesCard from "../EmployeesCard/EmployeesCard";
import "./Employees.css";

interface EmployeesState{
    employees: EmployeesModel[];
}

class Employees extends Component<{}, EmployeesState> {

    public constructor(props: {}){
        super(props);
        this.state ={
            employees: []
        }
    }

    public async componentDidMount(){
        try{
            const response = await axios.get<EmployeesModel[]>(globals.employeesUrl);
            this.setState({employees: response.data})
            console.log(this.state.employees);
            console.log(response.data);

        }
        catch(err){
            alert(err)
            console.log(err)
        }
    }

    public render(): JSX.Element {
        return (
            
            <div className="Employees">
                <h1>העובדים שלנו</h1>
                <div className="Employees-Container">
				    {this.state.employees.map(e => <EmployeesCard key={e.id} employee={e}/>)}
                </div>
            </div>
        );
    }
}

export default Employees;
