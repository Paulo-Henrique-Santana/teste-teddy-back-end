import { createClient } from "./createClient";
import { deleteClient } from "./deleteClient";
import { getAllClients } from "./getAllClients";
import { updateClient } from "./updateClient";

export const clientController = {
  getAllClients,
  createClient,
  deleteClient,
  updateClient
}