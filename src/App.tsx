import { useRecoilState } from "recoil";
import { minuteState } from "./atoms";
import React from "react";

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const onMinutesChange = (e:React.FormEvent<HTMLInputElement>) => {
        setMinutes(+e.currentTarget.value);
    }
    console.log(minutes);
    return (
        <div>
            <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
            <input type="number" placeholder="Hours" />
        </div>
    );
}

export default App;
