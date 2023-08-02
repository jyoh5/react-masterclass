import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import SelectCategory from "./SelectCategory";

function ToDoList() {
    // const [toDos, setToDos] = useRecoilState(toDoState);
    // const toDos = useRecoilValue(toDoState);
    // const setToDos = useSetRecoilState(toDoState);
    
    const toDos = useRecoilValue(toDoSelector);
    return (
        <div>
            <div>To Dos</div>
            <hr />
            <SelectCategory />
            <CreateToDo />
            {toDos.map(toDo => <ToDo key={toDo.id} {...toDo} />)}
        </div>
    );
}

export default ToDoList;