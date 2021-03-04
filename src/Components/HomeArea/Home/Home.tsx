import InputColor from "../InputColor/InputColor";
import Shoes from "../Shoes/Shoes";
import Youtube from "../Youtube/Youtube";
import css from "./Home.module.css"

function Home(): JSX.Element {
    const shoes = [{id: 1, model: "Nike"}, {id: 2, model: "Adidas"},{id: 3, model: "New Balance"},{id: 4, model: "Reebok"}];
    return (
        <div className={css.Home}>
            <h1>עמוד הבית</h1>
            <Youtube/>
            {/* {isSundayOrMonday() ? <p>10% הנחה על כל הנעליים</p> : ""} */}
            {/* {isSundayOrMonday() && <p>10% הנחה על כל הנעליים</p>} */}

            {/* <div>
                <Youtube/>
                <h3>רשימת הנעליים שלנו:</h3>
                <ul className={css.ourShoes}>
                    {shoes.map(item => <li key={item.id}>{item.model}</li>)}
                </ul>
            </div>
            <div>
                <h3>הנעליים שלנו:</h3>
                <Shoes brand="Adidas" size={40} price={250} picture="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/61f87dec481e4512823ea7fb0080ba1a_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg" />
                <Shoes brand="Nike" size={40} price={250} picture="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/61f87dec481e4512823ea7fb0080ba1a_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg" />
                <Shoes brand="Reebok" size={40} price={250} picture="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/61f87dec481e4512823ea7fb0080ba1a_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg" />
                <Shoes brand="Reebok" size={40} price={250} picture="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/61f87dec481e4512823ea7fb0080ba1a_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg" />
                <Shoes brand="Reebok" size={40} price={250} picture="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/61f87dec481e4512823ea7fb0080ba1a_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg" />
            </div>
            <InputColor/> */}
        </div>
    );
}

function isSundayOrMonday(){
    const date = new Date();
    const day = date.getDay() + 1;
    return day === 2 || day === 1;
}
export default Home;
