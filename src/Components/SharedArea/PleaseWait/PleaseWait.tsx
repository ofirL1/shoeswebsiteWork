import "./PleaseWait.css";
import Loader from "../../../Asset/Images/loader.gif"
function PleaseWait(): JSX.Element {
    return (
        <div className="PleaseWait">
			<img src={Loader}/>
        </div>
    );
}

export default PleaseWait;
