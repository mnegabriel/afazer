import TodoItem from '../models/TodoItem';
import todoItemsRouter from '../routes/todoitems.routes';

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

  public update(updatedItem: TodoItem): TodoItem {
    const updatedList = this.todoItems.map(item => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });

    this.todoItems = updatedList;
    return updatedItem;
  }

  public erase(id: string): void {
    const newList = this.todoItems.filter(item => item.id !== id);

    this.todoItems = newList;
  }

  public eraseChecked(): void {
    const newList = this.todoItems.filter(item => item.checked === false);

    if (newList === this.todoItems) {
      throw Error('No cheked Items');
    }

    this.todoItems = newList;
  }
}

export default TodoItemsRepository;
