import Message from "./Message";

export const MessageList = ({messages}) => {
    return (
        <div>
            {messages.map(message => (
                <div key={message.id}>
                    <Message message={message}/>
                </div>
            ))}
        </div>
    )
}