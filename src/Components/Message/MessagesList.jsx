import MessageItem from "./MessageItem";

const MessagesList = ({messages = []}) => {
    return (
        <>
            {messages.map(message => (
                <div key={message.id}>
                    <MessageItem message={message} />
                </div>
            ))}
        </>
    )
}

export default MessagesList