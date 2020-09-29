import { Router } from 'express';

import TodoItemsRepository from '../repositories/TodoItemsRepository';
import CreateTodoItem from '../services/CreateTodoItem';
import ToggleItemCheck from '../services/ToggleItemCheck';
import AlterItemContent from '../services/AlterItemContent';
import DeleteItem from '../services/DeleteItem';

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

todoItemsRouter.patch('/:id/check', (request, response) => {
  try {
    const { id } = request.params;

    const toggleItemCheck = new ToggleItemCheck(todoItemsRepository);

    const updatedItem = toggleItemCheck.execute(id);

    return response.json(updatedItem);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

todoItemsRouter.patch('/:id/content', (request, response) => {
  try {
    const { id } = request.params;
    const { title, description } = request.body;

    const alterItemContent = new AlterItemContent(todoItemsRepository);

    const updatedItem = alterItemContent.execute({ id, title, description });

    return response.json(updatedItem);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

todoItemsRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;

    const deleteItem = new DeleteItem(todoItemsRepository);
    deleteItem.execute(id);

    return response.json(200).json({ message: 'item deleted' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

todoItemsRouter.delete('/', (request, response) => {
  try {
    todoItemsRepository.eraseChecked();

    return response.json(200).json({ message: 'Checked items deleted' });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default todoItemsRouter;
