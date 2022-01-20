import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';


//указание функционального компонента
const UserList: React.FC = () => {

    //свой хук для получения store
    const {users, error, loading} = useTypedSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div>
            {users.map((user) =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    )
}

export default UserList
