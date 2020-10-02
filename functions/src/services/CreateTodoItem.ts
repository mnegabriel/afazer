import TodoItem from '../models/TodoItem';

import TodoItemsRepository from '../repositories/TodoItemsRepository';

class CreateTodoItem {
  private todoItemsRepository: TodoItemsRepository;

  constructor(todoItemsRepository: TodoItemsRepository) {
    this.todoItemsRepository = todoItemsRepository;
  }

  public execute(title: string): TodoItem {
    if (title === '') {
      throw Error("Can't create empty item");
    }

    const todoItem = this.todoItemsRepository.create(title);

    return todoItem;
  }
}

export default CreateTodoItem;
