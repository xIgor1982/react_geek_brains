import Button from "@mui/material/Button";
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import {Container} from "@mui/material";
import {useState} from "react";
import {sigOUT} from "../../store/profile/action";
import { useDispatch, useSelector } from "react-redux";
// import { toggleCheckbox } from "../../store/profile/action";
// import { selectName, selectCheckbox } from '../../store/profile/selectors'

export const Profile = () => {
    const [value, setValue] = useState(false)
    // const [name, setName] = useState('default name')
    // const checkbox = useSelector(selectCheckbox)
    // const name = useSelector(selectName)
    const dispatch = useDispatch()

    // const handleChange = () => {
    //     dispatch(toggleCheckbox)
    // }
    const handleChange = (e) => {
        setValue(prev => !prev)
    }

    const handleSignOut = () => {
        dispatch(sigOUT())
    }

    console.log('value >>> ', value)

    return (
        <Container>
            <Button
                variant="contained"
                endIcon={<CancelScheduleSendIcon/>}
                onClick={handleSignOut}
            >
                Sign Out
            </Button>
            <hr/>
            <h1>Profile pages</h1>
            <input type='checkbox' onChange={handleChange}/>
            <form>
                <input type="text"/>
                <input type="submit"/>
            </form>
        </Container>
    )
}