import { Component, SyntheticEvent } from "react";
import "./InputColor.css";

interface InputColorState {
	currentColor: string;
}

class InputColor extends Component<{}, InputColorState> {
    private colors = ["red","blue","green","yellow"];

    public constructor(props: {}) {
        super(props);
        this.state = {
			currentColor: ""
        };
    }
    private changeColor(args: SyntheticEvent){
        const input = (args.target as HTMLInputElement);
        const value = input.value;
        input.style.backgroundColor = value;
    }

    public componentDidMount(){
        
        const index = Math.floor(Math.random()*this.colors.length)
        this.setState({currentColor: this.colors[index]});
        console.log(this.state.currentColor);
    }
    

    public render(): JSX.Element {
        const dynamicStyle = {
            backgroundColor: this.state.currentColor
        }

        console.log(this.state.currentColor);

        return (
            <div style={dynamicStyle} className="InputColor">
                <h4>Enter Color</h4>
				<input onChange={this.changeColor} type="text"></input>
            </div>
        );
    }
}

export default InputColor;
