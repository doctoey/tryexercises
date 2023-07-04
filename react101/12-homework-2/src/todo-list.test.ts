import { Todo } from './todo';
import { TodoList } from './todo-list';

describe("TodoList", () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it("should add a new todo", () => {
    const todo = new Todo(1, "Buy groceries");

    todoList.addTodo(todo);

    expect(todoList.getTodos()).toContain(todo);
  });

  it("should remove a todo by id", () => {
    const todo1 = new Todo(1, "Buy groceries");
    const todo2 = new Todo(2, "Walk the dog");

    todoList.addTodo(todo1);
    todoList.addTodo(todo2);
    todoList.removeTodoById(1);

    expect(todoList.getTodos()).not.toContain(todo1);
    expect(todoList.getTodos()).toContain(todo2);
  });

  it("should mark a todo as completed", () => {
    const todo = new Todo(1, "Buy groceries");

    todoList.addTodo(todo);
    todoList.markTodoCompleted(1);

    expect(todo.isCompleted()).toBe(true);
  });
});