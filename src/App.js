import './App.css';
import {useCallback, useEffect, useState} from "react";
import {MessageList} from "./Components/MessageList/MessageList";
import {InputFormMessage} from "./Components/MessageList/InputFormMessage";
import {AUTHORS} from "./Components/utils/constant";
import { v4 as uuidv4 } from 'uuid';

const initialMessages = [
    {
        id: uuidv4(),
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate dolorum enim eos harum
            illum laboriosam natus quod tempora ut! Autem incidunt ipsum, iure labore laudantium nostrum omnis unde
            veritatis`,
        author: AUTHORS.user
    },
    {
        id: uuidv4(),
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur doloribus exercitationem,
            ipsa minima rerum similique! Dolores ea est nesciunt odio soluta veritatis! Distinctio ex libero possimus
            quos reiciendis ut.`,
        author: AUTHORS.user
    },
]

function App(props) {
    const [messageList, setMessageList] = useState(initialMessages)
    const handleSendMessage = useCallback((newMessage) => {
        setMessageList(prevMessageList => [...prevMessageList, newMessage])
    }, [messageList])

    useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].author !== AUTHORS.bot) {
            const timeout = setTimeout(() => handleSendMessage({
                author: AUTHORS.bot,
                text: 'i am bot',
                id: uuidv4()
            }), 1500);
            return () => clearTimeout(timeout)
        }
    }, [messageList])

    return (
        <div className="App container app-component">
            <MessageList messages={messageList}/>
            <InputFormMessage onSendMessage={handleSendMessage}/>
        </div>
    );
}

export default App;
