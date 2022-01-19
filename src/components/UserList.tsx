import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';


//указание функционального компонента
const UserList: React.FC = () => {

    //свой хук для получения store
    const {users, error, loading} = useTypedSelector(state => state.user);
    console.log(users, error, loading);
    return (
        <div>
            Users
        </div>
    )
}

export default UserList
