import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import UserList from "./UserList";

// Mock axios
vi.mock("axios");

describe("test UserList component", () => {
  const mockUsers = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "1234567890",
    },
    {
      id: "2",
      name: "Jane Doe",
      email: "jane@example.com",
      phoneNumber: "0987654321",
    },
  ];

  it("renders the table successfully when API call succeeds", async () => {
    // mockResolvedValue เป็นการ mock result function get
    axios.get.mockResolvedValue({ data: mockUsers });
    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("jane@example.com")).toBeInTheDocument();
      expect(screen.getByText("0987654321")).toBeInTheDocument();
    });
  });

  it("filters users based on search input", async () => {
    //ต้อง get ใหม่ทุกครั้ง ไม่งั้นจะดึงข้อมูลไม่ได้
    axios.get.mockResolvedValue({ data: mockUsers });
    render(<UserList />);

    await waitFor(() => {
      // change event ของการวางข้อมูลใน input แล้วปล่อย cursor
      fireEvent.change(screen.getByPlaceholderText("Search by name or email"), {
        // พิมพ์ John ไป
        target: { value: "John" },
      });

      // จะได้ John
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      // ไม่ใช้ getBy เพราะถ้าไม่เจอ จะ throw error
      // ใช้ queryBy แทน
      // ไม่เจอ Jane
      expect(screen.queryByText("Jane Doe")).not.toBeInTheDocument();
    });
  });

  it("handles API failure without problems and still renders", async () => {
    // call api failed => mockRejectedValue
    axios.get.mockRejectedValue(new Error("API call failed"));
    // spy mockfunction
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    render(<UserList />);

    await waitFor(() => {
      // toHaveBeenCalledWith
      // เช็คว่า มี error เกิดขึ้นจริงมั้ย
      expect(consoleSpy).toHaveBeenCalledWith(
        // ตรวจสอบตรงบรรทัด 16 ไฟล์ UserList.jsx => catch (error) {
        // console.error("Error fetching users:", error);
        // }
        "Error fetching users:",
        expect.any(Error)
      );
      // api ระเบิด ui ควรจะยังไม่พัง
      expect(
        screen.getByPlaceholderText("Search by name or email")
      ).toBeInTheDocument();
    });

    consoleSpy.mockRestore();
  });
});
