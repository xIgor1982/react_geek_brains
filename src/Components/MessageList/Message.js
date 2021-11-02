export default function Message ({message}) {
    return (
        <div>
            <span>text: {message.text} </span> : <span>{message.author}</span>
        </div>
    )
}