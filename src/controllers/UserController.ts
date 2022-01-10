import { Request, Response } from "express";
import { User } from "@schemas";
import RouteError from "@errors/RouteError";
export const insert = async (req: Request, res: Response) => {
  try {
    const user = new User({
      name: req.body.name,
    });
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    if (err instanceof RouteError) res.status(err.statusCode).send(err.message);
    else res.status(500).send(String(err));
  }
};

export const find = async (req: Request, res: Response) => {
  if (req.params.id) {
    res.status(200).send(await User.findById(req.params.id));
  } else {
    res.status(200).send(await User.find());
  }
};
