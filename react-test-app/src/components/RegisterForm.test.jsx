import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";
import RegisterForm from "./RegisterForm";
import axios from "axios";

// https://testing-library.com/docs/dom-testing-library/cheatsheet
// Mock axios to avoid real API calls
vi.mock("axios");

describe("RegisterForm component", () => {
  // ก่อนที่จะรันทุก case ใช้ beforeAll ได้เลย รันแค่รอบเดียวตอน start ทุก test
  beforeAll(() => {
    // Mock window.alert
    // global.windows.alert = vi.fn();
    vi.stubGlobal("alert", vi.fn());
    // Mock console.log
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterAll(() => {
    // Restore console.log after tests
    console.log.mockRestore();
  });

  it("renders the form", () => {
    const { getByLabelText, getByText } = render(<RegisterForm />);
    // ขอแค่มีคำนี้ ไม่สนเล็กใหญ่ regular expression
    // https://testing-library.com/docs/dom-testing-library/cheatsheet
    expect(getByLabelText(/name/i)).toBeInTheDocument();
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(getByText(/submit/i)).toBeInTheDocument();
  });

  it("shows validation errors", () => {
    const { getByText } = render(<RegisterForm />);

    fireEvent.click(getByText(/submit/i));

    expect(getByText(/name is required/i)).toBeInTheDocument();
    expect(getByText(/email is required/i)).toBeInTheDocument();
    expect(getByText(/phone number is required/i)).toBeInTheDocument();
  });

  it("shows validation error for invalid phone number format", () => {
    const { getByLabelText, getByText } = render(<RegisterForm />);

    fireEvent.change(getByLabelText(/phone number/i), {
      target: { value: "123abc4567" },
    });

    fireEvent.click(getByText(/submit/i));

    expect(
      getByText(/Invalid phone number, should be 10 digits/i)
    ).toBeInTheDocument();
  });

  it("shows validation email format errors", () => {
    const { getByLabelText, getByText } = render(<RegisterForm />);

    fireEvent.change(getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText(/email/i), {
      // format email ผิด !!
      target: { value: "johndoe@example" },
    });
    fireEvent.change(getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(getByText(/submit/i));

    expect(getByText(/email is invalid/i)).toBeInTheDocument();
  });

  it("submits form successfully", async () => {
    const { getByLabelText, getByText } = render(<RegisterForm />);
    const mockResponse = {
      data: {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        phoneNumber: "1234567890",
      },
    };
    axios.post.mockResolvedValue(mockResponse);
    fireEvent.change(getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(getByText(/submit/i));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "https://65a25d5342ecd7d7f0a771bd.mockapi.io/users",
        {
          name: "John Doe",
          email: "johndoe@example.com",
          phoneNumber: "1234567890",
        }
      );
    });
  });

  // Additional tests for error handling
  it("handles server error gracefully", async () => {
    axios.post.mockRejectedValue({
      response: { data: { message: "Server error occurred" } },
    });

    const { getByLabelText, getByText } = render(<RegisterForm />);
    fireEvent.change(getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(getByText(/submit/i));

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith("Register fail!");
      expect(console.log).toHaveBeenCalledWith(
        "error",
        expect.objectContaining({
          response: { data: { message: "Server error occurred" } },
        })
      );
    });
  });

  it("handles network error gracefully", async () => {
    axios.post.mockRejectedValue({ request: {} });

    const { getByLabelText, getByText } = render(<RegisterForm />);
    fireEvent.change(getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(getByText(/submit/i));

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith("Register fail!");
      expect(console.log).toHaveBeenCalledWith(
        "error",
        expect.objectContaining({ request: {} })
      );
    });
  });

  it("handles unexpected error gracefully", async () => {
    axios.post.mockRejectedValue(new Error("Unexpected error"));

    const { getByLabelText, getByText } = render(<RegisterForm />);
    fireEvent.change(getByLabelText(/name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText(/email/i), {
      target: { value: "johndoe@example.com" },
    });
    fireEvent.change(getByLabelText(/phone number/i), {
      target: { value: "1234567890" },
    });

    fireEvent.click(getByText(/submit/i));

    await waitFor(() => {
      expect(alert).toHaveBeenCalledWith("Register fail!");
      expect(console.log).toHaveBeenCalledWith(
        "error",
        expect.objectContaining({ message: "Unexpected error" })
      );
    });
  });
});
