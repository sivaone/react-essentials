import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Checkbox from "./Checkbox";

test("Checkbox checked", () => {
    render(<Checkbox />);
    const checkbox = screen.getByLabelText(/not checked/);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(true);

})