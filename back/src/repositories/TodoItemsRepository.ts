import TodoItem from '../models/TodoItem';

class TodoItemsRepository {
  private todoItems: TodoItem[];

  constructor() {
    this.todoItems = [];
  }

  public all(): TodoItem[] {
    return this.todoItems;
  }

  public create(title: string): TodoItem {
    const todoItem = new TodoItem(title);

    this.todoItems.push(todoItem);

    return todoItem;
  }

  public findById(id: string): TodoItem | null {
    const chosenItem = this.todoItems.find(item => item.id === id);

    return chosenItem || null;
  }

  public toggleCheckItem(id: string): TodoItem | null {
    const todoItem = this.findById(id);
    if (todoItem) {
      this.todoItems.map(item => {
        if (item.id === id) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
    }
    return null;
  }
}

export default TodoItemsRepository;
