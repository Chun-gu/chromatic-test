import { rest } from "msw";
import { article } from "./data";

const handlers = [
  rest.get("/article", (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(article));
  }),
];

export default handlers;
