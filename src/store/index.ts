import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

//создаем store на основе корневого редюсера, с применением Middleware и работы в devTools
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))