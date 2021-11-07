import {AppBar, Container, IconButton, Toolbar, Typography} from "@mui/material";

function MenuIcon() {
    return null;
}

const ChatsHeader = () => {
    return (
        <AppBar  position="sticky" sx={{ mb: 0.5 }}>
            <Toolbar variant="dense">
                <Container>
                    <Typography
                        variant="h6"
                        color="inherit"
                        component="div"
                        sx={{
                            flexGrow: 1
                        }}
                    >
                        Чаты с глубоким жизненным смыслом
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default ChatsHeader