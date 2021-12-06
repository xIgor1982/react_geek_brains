import { CircularProgress, Container } from "@mui/material"
import { useEffect, useState } from "react"
import { API_URL } from "../../data/data"

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    

    useEffect(() => {
        setLoading(true)
        fetch(API_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('not ok')
                }
                return response.json()
            })
            .then(result => {
                setError(false)
                setArticles(result)
            })
            .catch((err) => {
                console.warn(err)
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <Container>
            <h2>Articles</h2>
            {loading ? <CircularProgress /> : <>
                {error && <h2>ERROR 404</h2>}
                <ul>
                    {articles.map(art => {
                        return (
                            <li key={art.id}>{art.title}</li>
                        )
                    }
                    )}
                </ul>
            </>}
        </Container>
    )
}

export default Articles