import { useCallback, useEffect, useState } from "react"
import { CircularProgress, Container } from '@mui/material'
import { API_URL_PUBLIC } from '../../data/data'

const Gist = () => {
    const [gists, setGists] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const renderGists = () => {
        setLoading(true)
        fetch(API_URL_PUBLIC)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }

                return response.json()
            })
            .then((result) => setGists(result))
            .catch((err) => {
                setError(true)
                console.log(err)
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        renderGists()
    }, [])

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
        []
    )

    if (loading) {
        return <CircularProgress />
    }

    if (error) {
        return (
            <Container>
                <h3>Ошибка загрузки данных</h3>
                <button onClick={renderGist}>Попробовать получить данные</button>
            </Container>
        )
    }

    return (
        <Container>
            <h1>Gists</h1>

            <ul>
                {gists.map(renderGist)}
            </ul>
        </Container>

    )
}


export default Gist