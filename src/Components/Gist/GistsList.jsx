import { CircularProgress, Container } from "@mui/material"
import { useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { GetAllGists } from "../../store/gist/actions"
import { selectGists, selectGistsError, selectGistsLoading } from "../../store/gist/selectors"

export const GistsList = () => {
    const dispatch = useDispatch()

    const gists = useSelector(selectGists)
    const error = useSelector(selectGistsError)
    const loading = useSelector(selectGistsLoading)

    const requestGists = () => {
        dispatch(GetAllGists)
    } 

    useEffect(() => {
        requestGists()
    }, [])

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    )

    if(loading) {
        return 
        <Container>
          <CircularProgress />  
        </Container>        
    }

    if (error) {
        <>
            <h3>Error</h3>
            <button onClick={requestGists}>Retry</button>
        </>
    }

    return <ul>{gists.map(renderGist)}</ul>
}