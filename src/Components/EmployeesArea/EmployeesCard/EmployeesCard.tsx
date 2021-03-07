import EmployeesModel from "../../../Model/EmployeesModel";
import globals from "../../../Service/Globals";
import "./EmployeesCard.css";

interface EmployeesCardProps {
	employee: EmployeesModel;
}

function EmployeesCard(props: EmployeesCardProps): JSX.Element {
    return (
        <div className="EmployeesCard">
            <p><img src={globals.employeesUrl + "/images/" + props.employee.imageName}/></p>
			<p>{props.employee.firstName + " " + props.employee.lastName}</p>
            <p>{props.employee.title}</p>
            <p>{props.employee.birthDay}</p>
            <p>{props.employee.country}</p>
            <p>{props.employee.city}</p>
        </div>
    );
}

export default EmployeesCard;
