import {Button, TextField} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {AUTHORS} from "../../data/data";
import SendIcon from '@mui/icons-material/Send';

const ButtonAdd = ({handleSendMessage, chatId}) => {
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

    useEffect(() => inputRef.current?.focus(), [chatId])

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
                variant="outlined"
                type="submit"
                sx={{mt: 0.5}}
                endIcon={<SendIcon />}
                color='inherit'
            >
                Отправить
            </Button>
        </form>
    )
}

export default ButtonAdd