import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import Counter from "./Counter";

describe("test Counter component", () => {
  // Counter render ออกมาได้จริงๆใช่ไหม (มั่นใจใช่ไหมว่าไม่มี error อะไรตอนจังหวะ render)
  // ทำอะไรก่อน ในทุกๆการ run test
  // เลย render Counter component ขึ้นมาก่อน
  // ทุกครั้งที่มีการ run test จะ render <Counter /> เสมอ
  beforeEach(() => {
    render(<Counter />);
  });

  // test case
  // function ของตัวนั้น
  it("should render counter", () => {
    // พึ่งพา screen ทำการหา dom
    // check Counter: มีอยู่จริง คือ toBeInTheDocument
    // screen.getByText(/Counter:/) เป็นคำสั่งสำหรับการค้นหา DOM ที่อยู่บน Screen ที่ใส่คำนี้ไว้
    // .toBeInTheDocument() เป็นคำสั่งสำหรับการเช็คว่าสิ่งนั้นเจอหรือไม่เจอ (ใช้คู่กับคำสั่งค้นหา DOM)
    expect(screen.getByText(/Counter:/)).toBeInTheDocument();
  });

  it("increments counter", () => {
    // fireEvent click จำลองการ click ออกมา
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });

  it("decrement counter", () => {
    fireEvent.click(screen.getByText("Decrement"));
    expect(screen.getByText("Counter: -1")).toBeInTheDocument();
  });
});
