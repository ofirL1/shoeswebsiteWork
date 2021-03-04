import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <h2>קישורים מומלצים לנעליים</h2>
            <NavLink to="/home" exact>דף הבית</NavLink>
            <NavLink to="/products" exact>מוצרים</NavLink>
            <NavLink to="/succses-story" exact>סיפורי הצלחה</NavLink>
            <NavLink to="/about" exact>מי אנחנו</NavLink>
        </div>
    );
}

export default Menu;
