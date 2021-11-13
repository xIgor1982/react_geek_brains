import MessagesList from "./MessagesList";
import {Box} from "@mui/material";
import ButtonAdd from "../Buttons/ButtonAdd";

const Messages = ({messages, handleSendMessage, chatId}) => {
    return (
        <Box sx={{pb: 5}}>
            <MessagesList
                messages={messages}
            />
            <ButtonAdd
                handleSendMessage={handleSendMessage}
                chatId={chatId}
            />
        </Box>
    )
}

export default Messages