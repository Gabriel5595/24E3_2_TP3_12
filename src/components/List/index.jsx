export default function List(props) {

    if (props.numbers.length === 0) {
        return (
            <p>A lista está vazia</p>
        )
    } else {
        return (
            <div>
                <ul>
                    {props.numbers.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>
            </div>
        )
    }
}