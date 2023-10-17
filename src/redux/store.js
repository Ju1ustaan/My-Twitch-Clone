import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
    videoList: [],
    chanelId: 0,
    highlight: [],
    loader: false,
    pagination: '',
    userLogin: '',
    user: {}
}

const contentReducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_POPULAR':
            return {...state, videoList: action.payload }
        case 'CHANNEL_ID':
            return {...state, chanelId: action.payload }
        case 'GET_HIGHLIGHT':
            return {...state, highlight: action.payload }
        case 'SHOW_LOADER':
            return {...state, loader: action.payload }
        case 'USER_LOGIN':
            return {...state, userLogin: action.payload }
        case 'GET_USER':
            return {...state, user: action.payload }
        case 'SET_PAGINATION':
            return {...state, pagination: action.payload }
        default:
            return state
    }
}


export const store = createStore(contentReducer, applyMiddleware(thunk))