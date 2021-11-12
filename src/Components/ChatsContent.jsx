import {Container, Grid,  List as MaterialList, ListItem} from "@mui/material";
import Messages from "./Message/Messages";
import {CHATS_NAME_LIST} from "../data/data";

const ChatsContent = ({messages, handleSendMessage}) => {



    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <MaterialList>
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
                    </MaterialList>
                </Grid>
                <Grid item xs={10}>
                    <Messages
                        messages={messages}
                        handleSendMessage={handleSendMessage}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ChatsContent