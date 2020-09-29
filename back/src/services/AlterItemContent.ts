import TodoItem from '../models/TodoItem';

import TodoItemsRepository from '../repositories/TodoItemsRepository';

class AlterItemContent {
  private todoItemsRepository: TodoItemsRepository;

  constructor(todoItemsRepository: TodoItemsRepository) {
    this.todoItemsRepository = todoItemsRepository;
  }

  public execute({
    id,
    title,
    description,
  }: Omit<TodoItem, 'checked'>): TodoItem {
    const findItem = this.todoItemsRepository.findById(id);

    if (findItem === null) {
      throw Error('Item not found');
    }
    if (title === '') {
      throw Error("Title can't be empty");
    }

    const updatedItem = { ...findItem, title, description };

    const itemInRepo = this.todoItemsRepository.update(updatedItem);

    return itemInRepo;
  }
}

export default AlterItemContent;
