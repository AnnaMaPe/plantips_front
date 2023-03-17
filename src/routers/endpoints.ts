interface Endpoints {
  plantips: string;
  users: string;
  login: string;
  tips: string;
  myTips: string;
  delete: string;
  slash: string;
  findId: string;
  create: string;
}

export const endpoints: Endpoints = {
  plantips: "/plantips",
  users: "/users",
  login: "/login",
  tips: "/tips",
  myTips: "/my-tips",
  delete: "/delete",
  slash: "/",
  findId: "/:id",
  create: "/create",
};
