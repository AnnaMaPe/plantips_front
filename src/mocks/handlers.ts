import { rest } from "msw";
import { paths } from "../routers/paths";

import { tipsFromApi } from "./tipsMocks";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${paths.users}${paths.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "ThisIsAToken" }))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${paths.tips}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(tipsFromApi))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${paths.tips}${paths.myTips}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(tipsFromApi))
  ),
  rest.delete(
    `${process.env.REACT_APP_URL_API}${paths.tips}${paths.delete}${paths.findId}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(tipsFromApi))
  ),
  rest.post(
    `${process.env.REACT_APP_URL_API}${paths.tips}${paths.create}`,
    async (req, res, ctx) => res(ctx.status(201), ctx.json(tipsFromApi))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${paths.tips}${paths.findId}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(tipsFromApi))
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${paths.users}${paths.login}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${paths.tips}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${paths.tips}${paths.myTips}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),
  rest.delete(
    `${process.env.REACT_APP_URL_API}${paths.tips}${paths.delete}${paths.findId}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),
  rest.post(
    `${process.env.REACT_APP_URL_API}${paths.tips}${paths.create}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${paths.tips}${paths.findId}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),
];
