import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

//наследуемся от стандартной функции с типом корневого редюсера
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;