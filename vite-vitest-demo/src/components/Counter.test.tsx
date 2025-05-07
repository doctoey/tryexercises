import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Counter } from "./Counter";

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("sould render component counter", () => {
    const count = screen.getByTestId("count");
    expect(count).toBeInTheDocument();
  });

  it("should increase count", () => {
    const count = screen.getByTestId("count");
    fireEvent.click(screen.getByRole("button"));
    expect(count).toHaveTextContent("1");
  });
});
