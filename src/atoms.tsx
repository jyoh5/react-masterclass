import { get } from "http";
import { atom, selector } from "recoil";

export const minuteState = atom({
    key: "minutes",
    default: 0,
})
