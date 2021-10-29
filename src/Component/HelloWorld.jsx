import './../css/myStyle.css'

function HelloWorld(props) {
    return (
        <h1 style={{textAlign: "center", fontSize: "60px"}}>Hello {props.world}!</h1>
    );
}

export default HelloWorld;