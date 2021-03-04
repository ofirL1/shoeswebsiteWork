import { Component } from "react";
import "./Clock.css";
import Clock1 from "../../../Asset/Images/clock1.jpeg"
import Clock2 from "../../../Asset/Images/clock2.jpeg"
import Clock3 from "../../../Asset/Images/clock3.jpeg"
import Clock4 from "../../../Asset/Images/clock4.jpeg"
import Clock5 from "../../../Asset/Images/clock5.jpeg"

interface ClockState{
    currentTime: string;
    imgArr: string[];
    currentImg: string;
}

class Clock extends Component<{},ClockState> {

    private timeInterval = 0;

    public constructor(prop: {}){
        super(prop);
        this.state = {currentTime: (new Date).toLocaleTimeString(), imgArr: [Clock1,Clock2,Clock3,Clock4,Clock5], currentImg: Clock1}
    }
    public componentDidMount(){
        this.timeInterval = window.setInterval(() =>{
            const currentTime = (new Date).toLocaleTimeString();
            this.setState({currentTime: currentTime});

            const index = Math.floor(Math.random()*this.state.imgArr.length);
            this.setState({currentImg: this.state.imgArr[index]})
        },1000)
    }

    public componentWillUnmount(){
        clearInterval(this.timeInterval)
    }

    public render(): JSX.Element {
        return (
            <div className="Clock">
				<span>{this.state.currentTime}</span>
                <img height={20} src={this.state.currentImg}/>
            </div>
        );
    }
}

export default Clock;
