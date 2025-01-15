import { Request, Response } from "express";
import { Client } from "../../models/Client";

export const createClient = async (req: Request, res: Response) => {
  try {
    const client = await Client.create(req.body)

    return res.json(client);
  } catch (err) {
    res.status(500).send({
      error: "Ocorreu um erro inesperado."
    });
  }
};
