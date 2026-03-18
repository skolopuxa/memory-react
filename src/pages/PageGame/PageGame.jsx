import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";

export default function PageGame() {
    return (
        <div className="container">
           <Header />
            <main>
                <Button title="заказать" color="red" />
                <Button title="купить" color="green" />
                <Button title="Войти" color="blue" />

                <button>моя кнопка</button>

                <Grid />

            </main>
            <footer>
                <p>&copy; Ивлева Кира, 2026</p>
            </footer>

        </div>
    )
}