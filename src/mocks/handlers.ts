import { rest } from "msw";
import { endpoints } from "../routers/endpoints";
import { tipsFromApi } from "./tipsMocks";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${endpoints.users}${endpoints.login}`,
    async (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ token: "ThisIsAToken" }))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${endpoints.tips}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(tipsFromApi))
  ),
  rest.get(
    `${process.env.REACT_APP_URL_API}${endpoints.tips}${endpoints.myTips}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(tipsFromApi))
  ),
  rest.delete(
    `${process.env.REACT_APP_URL_API}${endpoints.tips}${endpoints.delete}${endpoints.findId}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(tipsFromApi))
  ),
  rest.post(
    `${process.env.REACT_APP_URL_API}${endpoints.tips}${endpoints.create}`,
    async (req, res, ctx) => res(ctx.status(200), ctx.json(tipsFromApi))
  ),
];

export const errorHandlers = [
  rest.post(
    `${process.env.REACT_APP_URL_API}${endpoints.users}${endpoints.login}`,
    async (req, res, ctx) => res(ctx.status(400))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${endpoints.tips}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),

  rest.get(
    `${process.env.REACT_APP_URL_API}${endpoints.tips}${endpoints.myTips}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),
  rest.delete(
    `${process.env.REACT_APP_URL_API}${endpoints.tips}${endpoints.delete}${endpoints.findId}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),
  rest.post(
    `${process.env.REACT_APP_URL_API}${endpoints.tips}${endpoints.create}`,
    async (req, res, ctx) => res(ctx.status(500))
  ),
];
