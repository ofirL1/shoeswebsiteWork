import { Component } from "react";
import "./Shoes.css";

interface ShoesProps{
    brand:string;
    size:number;
    price:number;
    picture:string;
}
class Shoes extends Component<ShoesProps> {

    public render(): JSX.Element {
        return (
            <div className="Shoes">
				<p>מותג: {this.props.brand}, מידה: {this.props.size}, מחיר: {this.props.size}, תמונה: </p>
                <img height={50} src={this.props.picture}></img>
            </div>
        );
    }
}

export default Shoes;
