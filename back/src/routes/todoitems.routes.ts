import { Router } from 'express';

import TodoItemsRepository from '../repositories/TodoItemsRepository';
import CreateTodoItem from '../services/CreateTodoItem';

const todoItemsRouter = Router();

const todoItemsRepository = new TodoItemsRepository();

todoItemsRouter.get('/', (request, response) => {
  return response.json(todoItemsRepository.all());
});

todoItemsRouter.post('/', (request, response) => {
  try {
    const { title } = request.body;

    const createTodoItem = new CreateTodoItem(todoItemsRepository);
    const todoItem = createTodoItem.execute(title);

    return response.json(todoItem);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

todoItemsRouter.patch('/:id', (request, response) => {
  const { id } = request.params;

  const updatedItem = todoItemsRepository.toggleCheckItem(id);

  if (updatedItem !== null) {
    return response.json(updatedItem);
  }
  return response.status(404).json({ error: 'item not found' });
});

export default todoItemsRouter;
