import { 
    GET_GISTS_REQUEST, 
    GET_GISTS_SUCCESS, 
    GET_GISTS_FAILURE,
    GET_GISTS
} from "../typsStore";
import { API_URL_PUBLIC } from "../../data/data";


export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST
})

export const getGistsSuccess = (data) => ({
    type: GET_GISTS_SUCCESS,
    payload: data
})

export const getGistsFailure = (err) => ({
    type: GET_GISTS_FAILURE,
    payload: err
})

export const getGists = () => ({
    type: GET_GISTS
})

export const GetAllGists = () => async (dispatch, getState) => {
    const response = await fetch(API_URL_PUBLIC)
    const result = await response.json()
    dispatch(getGistsSuccess(result))
}