import { rest } from "msw";
import { todos } from "./data";

const handlers = [
  rest.get("/todos", (_, res, ctx) => res(ctx.status(200), ctx.json(todos))),
];

export default handlers;
