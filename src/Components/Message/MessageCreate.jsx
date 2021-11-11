import {Button, TextField} from "@mui/material";
import {useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {AUTHORS} from "../../data/data";

const MessageCreate = ({handleSendMessage}) => {
    const [value, setValue] = useState('')
    const inputRef = useRef()

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleSendMessage({
            id: uuidv4(),
            text: value,
            author: AUTHORS.user
        })

        inputRef.current?.focus()

        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="standard-basic"
                fullWidth
                label="Введите сообщение"
                variant="standard"
                value={value}
                onChange={handleChange}
                inputRef={inputRef}
                sx={{mb: 0.5}}
                autoFocus={true}
            />
            <Button
                variant="contained"
                type="submit"
                sx={{mt: 0.5}}
            >
                Отправить
            </Button>
        </form>
    )
}

export default MessageCreate