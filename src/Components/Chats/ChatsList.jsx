import {List, ListItem} from "@mui/material";

const ChatsList = ({chatsNameList}) => {
    return (
        <List>
            {chatsNameList.map((item, index) => {
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