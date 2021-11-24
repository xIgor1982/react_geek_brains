import {
    Avatar, 
    Card, 
    CardContent, 
    Divider, 
    Grid, 
    Typography
} from "@mui/material";

const MessageItem = ({message}) => {

    return (
        <Card sx={{maxWidth: "100%", mb: 1.5}}>
            <CardContent elevation={3} >
                <Grid container spacing={2} sx={{mb: 1}}>
                    <Grid item xs='auto' >
                        <Avatar>{message.author}</Avatar>
                    </Grid>
                    <Grid item xs >
                        <Typography gutterBottom variant="h4" component="div">
                            {message.author}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider/>
                <Typography variant="body2" color="text.secondary" sx={{mt: 2.5}}>
                    {message.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default MessageItem