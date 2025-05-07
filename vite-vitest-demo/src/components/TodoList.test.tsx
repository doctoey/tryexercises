import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { TodoList } from "./TodoList";

describe("TodoList", () => {
  // beforeEach(() => {
  //   render(<TodoList />);
  // });

  it("should let user type into the input field // allows typing in the input", () => {
    // 1. render component
    // 2. find input field
    // 3. fireEvent.change input เป็น "Learn Vitest"
    // 4. ตรวจว่า input มี value เป็น "Learn Vitest"
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/New todo/i);
    fireEvent.change(input, { target: { value: "Learn Vitest" } });
    expect(input).toHaveValue("Learn Vitest");
  });

  it("should add a todo when Add button is clicked // adds a todo item when the Add button is clicked", () => {
    // 1. render component
    // 2. type "Write tests" in input
    // 3. click Add button
    // 4. ควรเห็น "Write tests" ใน list
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/New todo/i);
    fireEvent.change(input, { target: { value: "Write tests" } });
    const addButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(addButton);
    const todoItem = screen.getByText(/Write tests/i);
    expect(todoItem).toBeInTheDocument();
    // expect(todoItem).toHaveAttribute("data-testid", "todo-item");
    // expect(todoItem).toHaveTextContent("Write tests");
  });

  it("should NOT add empty todo // does not add an empty todo item", () => {
    // 1. render component
    // 2. click Add button โดยไม่พิมพ์
    // 3. ตรวจว่าไม่มีรายการถูกเพิ่ม
    render(<TodoList />);
    const addButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(addButton);
    // const todoItem = screen.queryByText(/Write tests/i);
    // expect(todoItem).not.toBeInTheDocument();
    const items = screen.queryAllByTestId("todo-item");
    expect(items).toHaveLength(0);
  });

  it("should clear input after adding // clears the input field after adding a todo", () => {
    // 1. render component
    // 2. type ข้อความ
    // 3. click Add
    // 4. ตรวจว่า input กลับมาเป็นค่าว่าง
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/New todo/i);
    fireEvent.change(input, { target: { value: "Write tests" } });
    const addButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(addButton);
    expect(input).toHaveValue("");
  });

  it("should render multiple todos correctly // renders multiple todos correctly", () => {
    // 1. render component
    // 2. add หลายๆ item
    // 3. ตรวจว่า ul มี children ตามจำนวนที่เพิ่ม
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/New todo/i);
    const addButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "Learn Vitest" } });
    fireEvent.click(addButton);
    fireEvent.change(input, { target: { value: "Build a project" } });
    fireEvent.click(addButton);
    const todoItems = screen.getAllByTestId("todo-item");
    expect(todoItems).toHaveLength(3);
    expect(todoItems[0]).toHaveTextContent("Write tests");
    expect(todoItems[1]).toHaveTextContent("Learn Vitest");
    expect(todoItems[2]).toHaveTextContent("Build a project");
  });
});

// 💡 (Optional) ใช้ userEvent แทน fireEvent จะ realistic กว่า
// fireEvent เหมาะมากอยู่แล้ว แต่อาจลองใช้ userEvent ที่ simulate การพิมพ์และคลิกแบบ user จริงๆ:
// import userEvent from "@testing-library/user-event";

// แทน fireEvent.change
// await userEvent.type(input, "Write tests");

// แทน fireEvent.click
// await userEvent.click(button);
