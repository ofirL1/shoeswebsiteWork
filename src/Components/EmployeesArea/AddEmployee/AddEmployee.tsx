import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import EmployeesModel from "../../../Model/EmployeesModel";
import globals from "../../../Service/Globals";
import "./AddEmployee.css";

function AddEmployee(): JSX.Element {

    const history = useHistory();
    const {register , handleSubmit, errors } = useForm<EmployeesModel>();

    async function AddEmployee(employee: EmployeesModel){
        try{
            console.log("try")
            const response = await axios.post<EmployeesModel>(globals.employeesUrl , EmployeesModel.convertToFormData(employee));
            const addedEmployee = response.data;
            console.log(employee);
            console.log(addedEmployee);
    
            alert("Employee has been added. ID: " + addedEmployee.id);
            history.push("/employees")
        }
        catch(err){
            alert(err)
        }
       
    }

    return (
        <div dir="ltr" className="AddEmployee">
            <h1>Add New Employee</h1>
			<form onSubmit={handleSubmit(AddEmployee)}>
                <label>First Name</label><br/>
                <input type="text" name="firstName" ref={register({required: "true", minLength: 2, maxLength: 30})}/>
                {errors.firstName?.type === "required" && <span>Must Enter firstName</span>}
                {errors.firstName?.type === "minLength" && <span>Must Enter Min 2 Chars</span>}
                {errors.firstName?.type === "maxLength" && <span>Cannot Enter More Than 30 Chars</span>}
                <br/><br/>

                <label>Last Name</label><br/>
                <input type="text" name="lastName" ref={register}/>
                <br/><br/>

                <label>Title</label><br/>
                <input type="text" name="title" ref={register}/>
                <br/><br/>

                <label>Country</label><br/>
                <input type="text" name="country" ref={register}/>
                <br/><br/>

                <label>City</label><br/>
                <input type="text" name="city" ref={register}/>
                <br/><br/>

                <label>Image</label><br/>
                <input type="file" name="image" ref={register}/>
                <br/><br/>

                <button>Add Employee</button>
            </form>
        </div>
    );
}

export default AddEmployee;
