import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
// import {store} from '../../store'
import {toggleCheckbox} from "../../store/profile/action";

export const Profile = () => {
    // const state = store.getState()
    // const {checkbox, name} = useSelector(state => state)
    const checkbox = useSelector(state => state.checkbox)
    const name = useSelector(state => state.name)
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(toggleCheckbox)
    }

    return (
        <Container>
            <h1>Profile pages</h1>
            <input type='checkbox' checked={checkbox} onChange={handleChange} />
            <span> {name}</span>
        </Container>
    )
}