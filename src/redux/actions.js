import axios from "axios"
import { TWITCH_TOKEN, TWITCH_CLIENT_ID } from "../helper/keys" // не обращаем внимания, просто вставляем вместо этих переменных свои токен

export const getVideos = () => {
    return (dispatch) => {
        return axios('https://api.twitch.tv/helix/streams?first=40', {
            headers: {
                Authorization: `Bearer ${TWITCH_TOKEN}`,
                ['client-id']: TWITCH_CLIENT_ID,
            }
        }).then(res => {
            return dispatch({ type: "GET_POPULAR", payload: res.data })
        })
    }
}


export const getStream = (chanelId) => {

    return async (dispatch) => {
        return await axios(`https://api.twitch.tv/helix/videos?user_id=${chanelId}`, {
            headers: {
                Authorization: `Bearer ${TWITCH_TOKEN}`,
                ['client-id']: TWITCH_CLIENT_ID,
            }
        }).then(res => {
            return dispatch({ type: "GET_STREAM", payload: res.data })
        })
    }
}