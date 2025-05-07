import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  beforeEach(() => {
    render(<Toggle />);
  });

  it("sould render component Toggle", () => {
    const Toggle = screen.getByText(/Toggle START/);
    expect(Toggle).toBeInTheDocument();
  });

  it("sould render on or off when click button", () => {
    const button = screen.getByRole("button", { name: /Toggle/ });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    const on = screen.getByText(/ON/);
    expect(on).toBeInTheDocument();

    fireEvent.click(button);
    const off = screen.getByText(/OFF/);
    expect(off).toBeInTheDocument();
  });

  // Test case for initial state
  it("should toggle from OFF → ON → OFF", () => {
    // Initial state
    expect(screen.getByText("OFF")).toBeInTheDocument();

    // Click to turn ON
    const button = screen.getByRole("button", { name: /Toggle/ });
    fireEvent.click(button);
    expect(screen.getByText("ON")).toBeInTheDocument();

    // Click to turn OFF again
    fireEvent.click(button);
    expect(screen.getByText("OFF")).toBeInTheDocument();
  });
});
