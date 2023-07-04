export class Todo {
  // code here
  private id: number;
  private title: string;
  private completed: boolean;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  isCompleted(): boolean {
    return this.completed;
  }

  toggleCompleted(): void {
    this.completed = !this.completed;
  }
}