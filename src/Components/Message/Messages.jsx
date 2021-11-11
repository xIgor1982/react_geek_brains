import MessagesList from "./MessagesList";
import {Box} from "@mui/material";
import MessageCreate from "./MessageCreate";

const Messages = ({messages, handleSendMessage}) => {
    return (
        <Box sx={{pb: 5}}>
            <MessagesList
                messages={messages}
            />
            <MessageCreate
                handleSendMessage={handleSendMessage}
            />
        </Box>
    )
}

export default Messages