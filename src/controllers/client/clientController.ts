import { createClient } from "./createClient";
import { deleteClient } from "./deleteClient";
import { getClients } from "./getClients";
import { unselectClients } from "./unselectClients";
import { updateClient } from "./updateClient";

export const clientController = {
  getClients,
  createClient,
  deleteClient,
  updateClient,
  unselectClients
}