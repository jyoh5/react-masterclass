import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";
import React from "react";

function App() {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    const [hours, setHours] = useRecoilState(hourSelector);
    const onMinutesChange = (e:React.FormEvent<HTMLInputElement>) => {
        setMinutes(+e.currentTarget.value);
    }
    const onHoursChange = (e:React.FormEvent<HTMLInputElement>) => {
        setHours(+e.currentTarget.value);
    }
    return (
        <div>
            <input value={minutes} onChange={onMinutesChange} type="number" placeholder="Minutes" />
            <input value={hours} onChange={onHoursChange} type="number" placeholder="Hours" />
        </div>
    );
}

export default App;
