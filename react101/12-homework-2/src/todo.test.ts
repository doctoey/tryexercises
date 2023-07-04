import { Todo } from './todo';

describe("Todo", () => {
  let todo: Todo;

  beforeEach(() => {
    todo = new Todo(1, "Buy groceries");
  });

  it("should have an id", () => {
    expect(todo.getId()).toBe(1);
  });

  it("should have a title", () => {
    expect(todo.getTitle()).toBe("Buy groceries");
  });

  it("should not be completed by default", () => {
    expect(todo.isCompleted()).toBe(false);
  });

  it("should be able to toggle completed status", () => {
    todo.toggleCompleted();

    expect(todo.isCompleted()).toBe(true);
  });
});