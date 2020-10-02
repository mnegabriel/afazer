import { uuid } from 'uuidv4';

class TodoItem {
  id: string;

  title: string;

  checked: boolean;

  description: string;

  constructor(title: string) {
    this.id = uuid();
    this.title = title;
    this.checked = false;
    this.description = '';
  }
}

export default TodoItem;
