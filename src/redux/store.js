import { createStore, applyMiddleware } from "redux";

const initialState = {
    videoList: {},
    chanelId: 0,
    stream: '',
}

const contentReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANNEL_ID':
            return {...state, videoList: action.payload}
        case 'GET_POPULAR':
            return {...state, chanelId: action.payload}
        case 'GET_STREAM':
            return {...state, stream: action.payload}
        default:
            return state
    }
}


export const store = createStore(contentReducer, applyMiddleware(thunk))