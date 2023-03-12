import { rest } from "msw";

const apiUrl = process.env.REACT_APP_URL_API;

export const handlers = [
  rest.post(`${apiUrl}/plantips/login`, async (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: "ThisIsAToken" }))
  ),
];
