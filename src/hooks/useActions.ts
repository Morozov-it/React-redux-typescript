import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActionCreators from '../store/action-creators/user';
//импорт всех функций из файла

//хук для вызова метода dispatch 
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreators, dispatch)
}