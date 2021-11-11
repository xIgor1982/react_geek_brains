import {List, ListItem} from "@mui/material";
import {CHATS_NAME_LIST} from "../../data/data";

const ChatsList = () => {
    return (
        <List>
            {CHATS_NAME_LIST.map((item, index) => {
                return (
                    <ListItem
                        key={item.id}
                        divider={true}
                        variant="h6"
                        component="div"
                        sx={{
                            cursor: "pointer",
                            mb: 1
                        }}
                    >
                        {index + 1}). {item.name}
                    </ListItem>
                )
            })}
        </List>
    )
}

export default ChatsList