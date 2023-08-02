import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
    "TO_DO" = "TO_DO", 
    "DOING" = "DOING", 
    "DONE" = "DONE",
}

export interface IToDo {
    text: string;
    category: Categories;
    id: number,
}

const {persistAtom: categoryPersisAtom} = recoilPersist({
    key: "category",
    storage: localStorage,
});

export const categoryState = atom<Categories>({
   key: "category",
   default: Categories.TO_DO, 
   effects: [categoryPersisAtom],
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects: [ 
        ({setSelf, onSet}) => {
            const savedValue = localStorage.getItem("toDos");
            if (savedValue != null) {
              setSelf(JSON.parse(savedValue));
            }
          
            onSet((newValue, _, isReset) => {
              isReset
                ? localStorage.removeItem("toDos")
                : localStorage.setItem("toDos", JSON.stringify(newValue));
            });
        }
    ]
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter(toDo => toDo.category === category);
    }
})