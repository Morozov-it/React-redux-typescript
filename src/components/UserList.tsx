import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


//указание функционального компонента
const UserList: React.FC = () => {

    //свой хук для получения store
    const {users, error, loading} = useTypedSelector(state => state.user);

    //свой хук для получения функции actionCreator
    const {fetchUsers } = useActions();

    useEffect(() => {
        fetchUsers()
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
