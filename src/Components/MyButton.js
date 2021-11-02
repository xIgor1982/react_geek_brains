import {Button} from "react-bootstrap";

export default  function myButton ({myVariant, change, nameButton}) {
    return (
        <Button variant={myVariant} onClick={change}>{nameButton}</Button>
    )
}