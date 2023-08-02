import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

function SelectCategory() {
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (e:React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as any);
    }
    return (
        <select onInput={onInput} value={category}>
            <option value={Categories.TO_DO}>To Do</option>
            <option value={Categories.DOING}>Doing</option>
            <option value={Categories.DONE}>Done</option>
        </select>
    );
}

export default SelectCategory;