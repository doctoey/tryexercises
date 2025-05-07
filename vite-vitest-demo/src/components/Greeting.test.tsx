import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Greeting } from "./Greeting";

describe("Greeting", () => {
  beforeEach(() => {
    render(<Greeting />);
  });

  it("sould render component greeting", () => {
    const hello = screen.getByText(/Hello/);
    expect(hello).toBeInTheDocument();
  });

  it("should render name", () => {
    render(<Greeting name="eieiza" />);
    const nameElement = screen.getByText(/Hello, eieiza/);
    expect(nameElement).toBeInTheDocument();
  });
});

// แยกเป็น 2 test case
// 1. test case ที่ไม่มี name
// 2. test case ที่มี name
// โดยใช้ beforeEach() เพื่อ render component ก่อนทุก test case
describe("Greeting", () => {
  it("should render with no name", () => {
    render(<Greeting />);
    const hello = screen.getByText("Hello,");
    expect(hello).toBeInTheDocument();
  });

  it("should render with name", () => {
    render(<Greeting name="eieiza" />);
    // const nameElement = screen.getByText("Hello, eieiza");
    // expect(nameElement).toBeInTheDocument();
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Hello, eieiza");
  });
});
