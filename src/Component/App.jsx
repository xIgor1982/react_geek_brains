import './../css/myStyle.css'
import {Container} from "@mui/material";

function App(props) {
    return (
        <div className="app">
            <header className="hello">
                My First React App
                <h3>Hello {props.name}!</h3>
            </header>
            <section>
                Inline Styles
            </section>
        </div>
    );
}

export default App;
