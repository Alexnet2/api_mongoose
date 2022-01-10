import { Request, Response } from "express";
import { Story } from "@schemas";
import RouteError from "@errors/RouteError";
export const insert = async (req: Request, res: Response) => {
  try {
    const story = new Story(req.body);
    await story.save();
    res.status(201).send(story);
  } catch (err) {
    if (err instanceof RouteError) res.status(err.statusCode).send(err.message);
    else res.status(500).send(String(err));
  }
};

export const find = async (req: Request, res: Response) => {
  if (req.params.id) {
    res.status(200).send(await Story.findById(req.params.id));
  } else {
    res.status(200).send(await Story.find().populate("authors.author"));
  }
};
