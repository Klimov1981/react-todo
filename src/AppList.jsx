import './AppList.css'
import {ListItem} from "./ListItem";

export const AppList = ({todos, onComplete, onRemove}) => {
    return (
        <ul className="app__list">
            {todos.map((todo, index) => (
                <ListItem key={index}
                          todo={todo}
                          index={index}
                          onComplete={onComplete}
                          onRemove={onRemove}
                />
            ))}
        </ul>
    )
}