import {createStore, combineReducers} from "redux";
import profileReducer from './reducer/profile-reducer';
import dialogReducer from './reducer/dialog-reducer';
import postReducer from './reducer/post-reducer';
import workerRedux from './reducer/worker-redux';
import NewsReducer from "./reducer/news-reducer";

let reducers = combineReducers({
    profilePages: profileReducer,
    dialogPages: dialogReducer,
    postPages: postReducer,
    workerPages: workerRedux,
    newsPages: NewsReducer
});

let store = createStore(reducers)

window.store = store

export default store;