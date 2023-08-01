import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";


function ToDo({text, category, id}: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: {name}} = e;
        setToDos(oldToDos => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id);
            const newTodo = {text, id, category: name as any};
            return [...oldToDos.slice(0, targetIdx), newTodo, ...oldToDos.slice(targetIdx+1)];
        })
    }
    return (
        <li>
            <span>{text}</span>
            {/* {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To Do</button>} */}
            {category !== "TO_DO" && <button name="TO_DO" onClick={onClick}>To Do</button>}
            {category !== "DOING" && <button name="DOING" onClick={onClick}>Doing</button>}
            {category !== "DONE" && <button name="DONE" onClick={onClick}>Done</button>}
        </li>
    );
}

export default ToDo;