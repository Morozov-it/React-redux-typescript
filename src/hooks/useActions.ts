import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from './../store/action-creators/index';
//импорт всех actionCreators как объект

//хук для вызова метода dispatch 
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch)
}