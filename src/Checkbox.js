import React, {useReducer} from "react";

export default function Checkbox() {
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false,
        undefined
    );

    return (
        <>
            <label htmlFor={"checkbox"}>{checked ? "checked" : "not checked"}</label>
            <input id={"checkbox"} type={"checkbox"} value={checked} onChange={toggle}/>
        </>
    );
};