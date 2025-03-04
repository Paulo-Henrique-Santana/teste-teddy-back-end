import { Request, Response } from "express";
import { Client } from "../../models/Client";

export const unselectClients = async (req: Request, res: Response) => {
  try {
    await Client.update({ selected: false }, { where: {} });

    return res.status(204).json();
  } catch (err) {
    res.status(500).send({
      error: "Ocorreu um erro inesperado."
    });
  }
};
