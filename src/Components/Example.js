import {useState} from "react";
import Child from "./Child";
import MyButton from "./MyButton"

const style = {
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        textAlign: "center",
        gap: "5px",
    }
}

export default function Example () {
    const [count, setCount] = useState(0)
    const nameButton = {
        increment: "Увеличить",
        decrement: "Уменьшить"
    }

    const variantBtn = {
        danger: "danger",
        success: "success"
    }

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }


    return (
        <div>
            <Child number={count} />
            <div style={style.grid}>
                <MyButton myVariant={variantBtn.danger} change={decrementCount} nameButton={nameButton.decrement} />
                <MyButton myVariant={variantBtn.success} change={incrementCount} nameButton={nameButton.increment} />
            </div>
        </div>
    )
}