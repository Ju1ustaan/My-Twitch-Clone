import axios from "axios"
import { TWITCH_TOKEN, TWITCH_CLIENT_ID } from "../helper/keys"

export const getVideos = () => {
    return (dispatch) => {
        dispatch({ type: "GET_POPULAR", payload: [] })
        dispatch({ type: "SHOW_LOADER", payload: true })
        return axios('https://api.twitch.tv/helix/streams?first=10&after=eyJiIjp7IkN1cnNvciI6ImV5SnpJam94TXpBeE1TNHpNemszT1RjM056QTBOU3dpWkNJNlptRnNjMlVzSW5RaU9uUnlkV1Y5In0sImEiOnsiQ3Vyc29yIjoiZXlKeklqb3hNRGsyTVM0eE1qYzFNRE01TWpJM05qZ3NJbVFpT21aaGJITmxMQ0owSWpwMGNuVmxmUT09In19', {
            headers: {
                Authorization: `Bearer ${TWITCH_TOKEN}`,
                ['client-id']: TWITCH_CLIENT_ID,
            }
        }).then(res => {
            dispatch({ type: "SHOW_LOADER", payload: false })
            dispatch({ type: "SET_PAGINATION", payload: res.data.pagination.cursor })
            return dispatch({ type: "GET_POPULAR", payload: res.data.data })
        })
    }
}

export const getPagination = (cursor, pagination) => {
    return (dispatch) => {
        dispatch({ type: "GET_POPULAR", payload: [] })
        dispatch({ type: "SHOW_LOADER", payload: true })
        return axios(`https://api.twitch.tv/helix/streams?first=10&${pagination}=${cursor}`, {
            headers: {
                Authorization: `Bearer ${TWITCH_TOKEN}`,
                ['client-id']: TWITCH_CLIENT_ID,
            }
        }).then(res => {
            dispatch({ type: "SHOW_LOADER", payload: false })
            dispatch({ type: "SET_PAGINATION", payload: res.data.pagination.cursor })
            return dispatch({ type: "GET_POPULAR", payload: res.data.data })
        })
    }
}

export const getStream = (chanelId) => {
    return (dispatch) => {
        dispatch({ type: "GET_HIGHLIGHT", payload: [] })
        dispatch({ type: "SHOW_LOADER", payload: true })
        return axios(`https://api.twitch.tv/helix/videos?user_id=${chanelId}&type=highlight`, {
            headers: {
                Authorization: `Bearer ${TWITCH_TOKEN}`,
                ['client-id']: TWITCH_CLIENT_ID,
            }
        }).then(res => {
            dispatch({ type: "SHOW_LOADER", payload: false })
            return dispatch({ type: "GET_HIGHLIGHT", payload: res.data.data })
        }).catch()
    }
}

export const getUser = (userLogin) => {
    return (dispatch) => {
        return axios(`https://api.twitch.tv/helix/users?login=${userLogin}`, {
            headers: {
                Authorization: `Bearer ${TWITCH_TOKEN}`,
                ['client-id']: TWITCH_CLIENT_ID,
            }
        }).then(res => {
            console.log(res.data.data);
            dispatch({ type: 'GET_USER', payload: res.data.data[0] })
        })
    }
}

export const postAxios = (values) => {
    return (dispatch) => {
        return  axios(`https://id.twitch.tv/oauth2/token`, {
        method: 'POST',
        headers: {
            ['Content-Type']: 'application/x-www-form-urlencoded'
        },
        data: `client_id=${values.fullName}&client_secret=${values.password}&grant_type=client_credentials`
    }).then((res) => {
        return res
    }).catch(err => {
        console.error(err)
    })
    }
}