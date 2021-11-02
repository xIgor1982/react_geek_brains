import {useRef, useState} from 'react'
import {AUTHORS} from "../utils/constant";
import { v4 as uuidv4 } from 'uuid';

export const InputFormMessage = ({onSendMessage}) => {
    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    const handleChange = event => {
        setValue(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        onSendMessage({
            text: value,
            author: AUTHORS.user,
            id: uuidv4()
        })
        setValue('')
    }

    return (
        <form
            className="input-group mb-3"
            onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                value={value}
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Введите сообщение"
                aria-label="Recipient's username"
            />
            <input
                type='submit'
                className="input-group-text"
                value='отправить'
            />
        </form>
    )
}