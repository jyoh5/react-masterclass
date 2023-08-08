import { atom } from "recoil";

interface IToDoState {
    [key: string]: string[]    
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": ["aa","bb","cc",],
        Doing: ["dd","ee",],
        Done: ["ff"],
    },
});