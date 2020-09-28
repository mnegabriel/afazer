import { Router } from 'express';

import TodoItemsRepository from '../repositories/TodoItemsRepository';
import CreateTodoItem from '../services/CreateTodoItem';

const todoItemsRouter = Router();

const todoItemsRepository = new TodoItemsRepository();
const createTodoItem = new CreateTodoItem(todoItemsRepository);

todoItemsRouter.get('/', (request, response) => {
  return response.json(todoItemsRepository.all());
});

todoItemsRouter.post('/', (request, response) => {
  const { title } = request.body;

  const todoItem = createTodoItem.execute(title);

  return response.json(todoItem);
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
