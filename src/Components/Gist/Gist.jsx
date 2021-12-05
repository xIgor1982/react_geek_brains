import { useCallback, useEffect, useState } from "react"
import { CircularProgress, Container } from '@mui/material'
import { API_URL_PUBLIC } from '../../data/data'

const Gist = () => {
    const [gists, setGists] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const renderGists = async () => {
        setLoading(true)

        try {
            const response = await fetch(API_URL_PUBLIC)

            if (!response.ok) {
                throw new Error(`Ошибка запроса данных, статус: ${response.status}`);
            }

            const result = await response.json()
            setGists(result)
        } catch (err) {
            setError(true)
            console.warn(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        renderGists()
    }, [])

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description || 'No description'}</li>,
        []
    )

    if (loading) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        )
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