import Clock from "../../HomeArea/Clock/Clock";
import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<p>כל הזכויות שמורות - אופיר לוזון |{currentYear()} </p>
            <Clock/>
            
        </div>
    );
}

function currentYear(){
    const date = new Date();
    const year = date.getFullYear();
    return year;
}

export default Footer;
