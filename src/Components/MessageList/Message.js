export default function Message ({message}) {
    return (
        <div className='block-style'>
            <h6>author message: {message.author}</h6>
            <div>text: {message.text}</div>
        </div>
    )
}