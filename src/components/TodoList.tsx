import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import createPages from './../utils/pagesCreator'

const TodoList: React.FC = () => {
    //свой хук для получения store
    const { todos, error, loading, currentPage, limit, totalCount } = useTypedSelector(state => state.todo);
    const { fetchTodos, setTodoPage } = useActions();

    //вычисления для постраничного вывода репозиториев
    const totalPages = Math.ceil(totalCount / limit);
    const pages = new Array;
    createPages(pages, totalPages, currentPage);

    useEffect(() => {
        fetchTodos(currentPage, limit);
    }, [currentPage])
    
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }
    return (
        <div>
            <h2>Todos</h2>
            {todos.map((todo) =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display:'flex'}}>
                {pages.map((page, index) =>
                    <div key={index}
                    onClick={()=>setTodoPage(page)}
                        style={{
                            border: page === currentPage ? '2px solid black' : '1px solid gray',
                            padding: '10px',
                            cursor: 'pointer'
                    }} >{page}</div>)}
            </div>
        </div>
    );
};

export default TodoList;
