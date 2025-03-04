import express from 'express';
import { clientController } from '../controllers/client/clientController';

const clientRouter = express.Router();

clientRouter.get('/', clientController.getClients);
clientRouter.post('/', clientController.createClient);
clientRouter.delete('/:id', clientController.deleteClient);
clientRouter.put('/:id', clientController.updateClient);
clientRouter.patch('/unselect', clientController.unselectClients);

export default clientRouter;
