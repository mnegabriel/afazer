import { Router } from 'express';
import todoitemRouter from './todoitems.routes';

const routes = Router();

routes.use('/todoitems', todoitemRouter);

export default routes;
