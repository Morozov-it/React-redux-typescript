import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

//создаем store на основе корневого редюсера, с применением Middleware
export const store = createStore(rootReducer, applyMiddleware(thunk))