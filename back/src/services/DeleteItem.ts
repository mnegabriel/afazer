import TodoItemsRepository from '../repositories/TodoItemsRepository';

class DeleteItem {
  private todoItemsRepository: TodoItemsRepository;

  constructor(todoItemsRepository: TodoItemsRepository) {
    this.todoItemsRepository = todoItemsRepository;
  }

  public execute(id: string): void {
    const findItem = this.todoItemsRepository.findById(id);

    if (findItem === null) {
      throw Error('Item not found');
    }

    this.todoItemsRepository.erase(id);
  }
}

export default DeleteItem;
