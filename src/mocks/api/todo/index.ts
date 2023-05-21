import { rest } from "msw";
import { todos } from "./data";

const handlers = [rest.get("/search", (_, res, ctx) => res(ctx.json(todos)))];

export default handlers;
