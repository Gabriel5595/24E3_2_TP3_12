import List from "../../components/List";
import styles from "./home.module.css"

export default function Home() {

    const numbersFull = [1, 2, 3, 4, 5];
    const numbersEmpty = []
    return (
        <div>
            <h1>Lista preenchida</h1>
            <List numbers={numbersFull} />

            <h1>Lista Vazia</h1>
            <List numbers={numbersEmpty} />
        </div>
    )
}