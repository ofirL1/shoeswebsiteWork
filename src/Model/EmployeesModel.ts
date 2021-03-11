import { convertTypeAcquisitionFromJson } from "typescript";

class EmployeesModel{
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    country: string = "";
    city: string = "";
    title: string = "";
    birthDay: string = "";
    imageName: string = "";
    image: FileList;

    public static convertToFormData(employee: EmployeesModel) :FormData {
        const myFormData = new FormData();
        myFormData.append("firstName",employee.firstName);
        // myFormData.append("lastName",employee.lastName);
        // myFormData.append("title",employee.title);
        // myFormData.append("country",employee.country);
        // myFormData.append("city",employee.city);
        // myFormData.append("birthDate",employee.birthDay);
        // myFormData.append("image",employee.image.item(0));
        return myFormData;
    }

}



export default EmployeesModel