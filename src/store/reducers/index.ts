import { combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import { userReducer } from './userReducer'

//создаем корневой редюсер на основе импорта отдельных редюсеров
export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

//получаем на экспорт тип корневого редюсера для работы хука useSelector
export type RootState = ReturnType<typeof rootReducer>