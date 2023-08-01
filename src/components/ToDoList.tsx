import React from "react";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
    // const [toDos, setToDos] = useRecoilState(toDoState);
    const toDos = useRecoilValue(toDoState);
    // const setToDos = useSetRecoilState(toDoState);
    
    return (
        <div>
            <div>To Dos</div>
            <hr />
            <CreateToDo />
            <ul>
                {toDos.map(toDo => <ToDo key={toDo.id} {...toDo}></ToDo>)}
            </ul>
        </div>
    );
}

export default ToDoList;