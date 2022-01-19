//создаем перечисление с каждым типом констант
export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}


//создаем объект-интерфейс для исходного состояния с ТИПАМИ данных в его полях
export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
    //pay?: any; необязательный параметр
}


//создаем объект-интерфейс для каждого action
//для переменных можно использовать typeof
interface FetchUsersAction {
    //type: typeof FETCH_USERS;
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
//создаем конкретные типы action
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
