import { Container } from "@mui/material";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleCheckbox } from "../../store/profile/action";
// import { selectName, selectCheckbox } from '../../store/profile/selectors'

export const Profile = () => {
    const [value, setValue] = useState(false)
    // const [name, setName] = useState('default name')
    // const checkbox = useSelector(selectCheckbox)
    // const name = useSelector(selectName)
    // const dispatch = useDispatch()

    // const handleChange = () => {
    //     dispatch(toggleCheckbox)
    // }
    const handleChange = (e) => {
        setValue(prev => !prev)
    }

console.log('value >>> ', value)

    return (
        <Container>
            <h1>Profile pages</h1>
            <input type='checkbox' onChange={handleChange} />
            <form>
                <input type="text" />
                <input type="submit" />
            </form>
        </Container>
    )
}