import { Todo } from './todo';

interface ITodoList {
  addTodo(todo: Todo): void
  removeTodoById(id: number): void
  markTodoCompleted(id: number): void 
  getTodos(): Todo[]
}

export class TodoList implements ITodoList {
  // code here
  private todos: Todo[];

  constructor() {
    this.todos = [];
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  removeTodoById(id: number): void {
    this.todos = this.todos.filter(todo => todo.getId() !== id);
  }

  markTodoCompleted(id: number): void {
    const todo = this.todos.find(todo => todo.getId() === id);
    if (todo) {
      todo.toggleCompleted();
    }
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
