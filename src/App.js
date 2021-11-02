import './App.css';
import Counter from "./Components/Counter";
import Example from "./Components/Example";

function App(props) {
    return (
        <div className="App container text-center">
            <div>
                <h1 className='display-4'>Мой первый React App компонент</h1>
                <h3 className='h3'>Привет, {props.name}!</h3>
            </div>
            <Counter />
            <div style={{borderBottom: "2px solid black", margin: "13px"}}/>
                <Example />
            <div style={{borderBottom: "2px solid black", margin: "13px"}}/>
        </div>
    );
}

export default App;
