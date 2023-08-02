import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";


function ToDo({text, category, id}: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name}} = e;
        setToDos(oldToDos => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id);
            const newTodo = {text, id, category: name as any};
            return [...oldToDos.slice(0, targetIdx), newTodo, ...oldToDos.slice(targetIdx+1)];
        });
    }
    const onClickDelete = (e:React.MouseEvent<HTMLButtonElement>) => {
        setToDos(oldToDos => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id);
            return [...oldToDos.slice(0, targetIdx), ...oldToDos.slice(targetIdx+1)];
        });
    };
    
    return (
        <li>
            <span>{text}</span>
            {/* {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>} */}
            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
            <button onClick={onClickDelete}>Delete</button>
        </li>
    );
}

export default ToDo;