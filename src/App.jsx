import React, { useState } from 'react';
import { AppForm } from './AppForm';
import { AppList } from './AppList';

function App() {
    const [todos, setTodos] = useState([{text: 'Понять', completed: false}]);
    // todos - массив задач
    // setTodos - функция, которя обновляет состояние массива
    // [] начальное значение

    // Добавление новой задачи
    const addTodo = (text) => {
        if (text.trim() !== '') {
            setTodos((prevTodos) => [
                ...prevTodos,
                { text, completed: false }, // Каждая задача имеет свойство "completed"
            ]);
        }
    };

    // Отметка задачи как выполненной
    const completeTodo = (index) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, completed: true } : todo
            )
        );
    };

    // Удаление задачи
    const removeTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    return (
        <div className="app-container">

            <AppForm onAddToDo={addTodo} />
            <AppList todos={todos} onComplete={completeTodo} onRemove={removeTodo} />
        </div>
    );
}

export default App;