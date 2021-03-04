import "./Youtube.css";

function Youtube(): JSX.Element {
    return (
        <div className="Youtube">
			<iframe width="100%" height="100%" src="https://www.youtube.com/embed/wRbDaWJLbcA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}

export default Youtube;
