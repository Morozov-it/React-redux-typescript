import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';
//импорт всех actionCreators из файлов

export default {
    ...UserActionCreators,
    ...TodoActionCreators
}