//создаем тип каждого поля начального состояния state
export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    currentPage: number;
    limit: number;
    totalCount: number
}

//создаем перечисление констант
export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

//создаем интерфейс для каждого action
interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR,
    payload: string
}
interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number
}
export type TodoActions =
    FetchTodoAction
    | FetchTodoSuccessAction
    | FetchTodoErrorAction
    | SetTodoPage