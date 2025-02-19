import React, {useState} from "react";
// Импортируем стили для компонента
import './AppForm.css';

// Экспортируем функциональный компонент AppForm
export const AppForm = ({onAddToDo}) => {
    // хранение значений input
    const [inputValue, setInputValue] = useState('')
    // Обрабатывает изменения в инпут
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    // обрабатываем отправку формы
    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputValue.trim() !== '') {}
        onAddToDo(inputValue)
        setInputValue('') // очищаем форму
    }
    return (
        <>
            <h2 className="app-username">
                Тёркин Василий
            </h2>
            <form className="app-form" onSubmit={handleSubmit}>
                <input className="app-form__input"
                       placeholder="Введите название"
                       type="text"
                       name="taskName"
                       value={inputValue}
                       onChange={handleChange}
                />

                <button className="btn btn_prime" type="submit">
                    Добавить
                </button>
            </form>
        </>
    );
};