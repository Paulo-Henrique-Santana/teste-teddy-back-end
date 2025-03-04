import { Request, Response } from "express";
import { WhereOptions } from "sequelize";
import { Client } from "../../models/Client";

export const getClients = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const { selected } = req.query;
    const where: WhereOptions = {};

    if (!page || !pageSize) {
      return res.status(400).json({
        error: 'Os parâmetros "page" e "pageSize" são obrigatórios.',
      });
    }

    if (selected != null) {
      where.selected = selected;
    }

    const { rows, count } = await Client.findAndCountAll({
      limit: pageSize,
      offset: (page - 1) * pageSize,
      where
    });

    return res.json({
      total: count,
      items: rows,
      hasNext: count > pageSize * page,
    });
  } catch (err) {
    res.status(500).send({
      error: "Ocorreu um erro inesperado."
    });
  }
};
