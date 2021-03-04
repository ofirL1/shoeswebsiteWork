import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
			<h1>מי אנחנו?</h1>

            <div className="Description">
            <p>אנחנו חנות הנעליים הכי מגניבה בארץ </p>
            <p>ניתן למצוא אצלנו רק את הנעליים היפות והאיכותיות ביותר</p>
            </div>

            <h5>כתובת: רח׳ סומסום 42 תל אביב</h5>

        </div>
    );
}

export default About;
