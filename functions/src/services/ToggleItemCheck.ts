import TodoItem from '../models/TodoItem';

import TodoItemsRepository from '../repositories/TodoItemsRepository';

class ToggleItemCheck {
  private todoItemsRepository: TodoItemsRepository;

  constructor(todoItemsRepository: TodoItemsRepository) {
    this.todoItemsRepository = todoItemsRepository;
  }

  public execute(id: string): TodoItem {
    const findItem = this.todoItemsRepository.findById(id);

    if (findItem === null) {
      throw Error('Item not found');
    }

    const updatedItem = {
      ...findItem,
      checked: !findItem.checked,
    };

    const itemInRepo = this.todoItemsRepository.update(updatedItem);

    return itemInRepo;
  }
}

export default ToggleItemCheck;
