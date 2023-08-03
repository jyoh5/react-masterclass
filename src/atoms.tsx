import { atom, selector } from "recoil";

interface IToDoState {
    [key: string]: string[]    
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        to_do: ["aa","bb","cc",],
        doing: ["dd","ee",],
        done: ["ff"],
    },
});