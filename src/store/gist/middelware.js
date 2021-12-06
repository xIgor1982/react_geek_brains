import { API_URL_PUBLIC } from "../../data/data";
import { GET_GISTS } from "../typsStore";
import { GET_GISTS_SUCCESS } from "../typsStore";

const getGists = () => ({
    type: GET_GISTS
})

const getGistsSuccess = (gists) => ({
    type: GET_GISTS_SUCCESS,
    payload: gists
})

const GetAllGists = () => async (dispatch, getState) => {
    const response = await fetch(API_URL_PUBLIC)
    const result = await response.json()
    dispatch(getGistsSuccess(result))
}