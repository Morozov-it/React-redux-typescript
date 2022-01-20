import { UserAction, UserState, UserActionTypes  } from "../../types/user";


//исходный объект наследует заданные типы данных в полях UserState
const initialState: UserState = {
    users: [],
    loading: false,
    error: null
};

//указывается что функция будет возвращать и какие параметры принимает
export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                ...state,
                loading: true
            }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
        }
        case UserActionTypes.FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                users: []
            }

        default:
            return state
    }
};
