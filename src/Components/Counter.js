import {Button, FormControl, InputGroup} from "react-bootstrap";
import {useState} from "react";

const style = {
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textAlign: "center",
        gap: "5px",
    },
    border: {
        display: "grid",
        textAlign: "center",
        border: "2px solid black",
        padding: "5px",
        borderRadius: "5px"
    }
}

export default function Counter() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }
    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }
    const handleChange = (event) => {
        setCount(Number(event.target.value))
    }


    return (
        <div className="container">
            <span className="h1" style={style.border}>{count}</span>
            <div style={style.grid}>
                <Button variant="danger" onClick={decrementCount}>Уменьшить</Button>
                <Button variant="success" onClick={incrementCount}>Увеличить</Button>
            </div>
            <div style={{marginTop: "10px"}}>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Введите число</InputGroup.Text>
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={count} onChange={handleChange} />
                </InputGroup>
            </div>

        </div>
    )
}