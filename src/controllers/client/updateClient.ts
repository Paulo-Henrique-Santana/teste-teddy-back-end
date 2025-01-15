import { Request, Response } from "express";
import { Client } from "../../models/Client";

export const updateClient = async (req: Request, res: Response) => {
  try {
    await Client.update(req.body, { where: { id: req.params.id } });

    return res.status(204).json();
  } catch (err) {
    res.status(500).send({
      error: "Ocorreu um erro inesperado."
    });
  }
};
