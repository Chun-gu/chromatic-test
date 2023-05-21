import { articleHandler, todoHandler } from "./api";

export const handlers = [...articleHandler, ...todoHandler];
