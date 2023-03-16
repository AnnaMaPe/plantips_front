interface Endpoints {
  plantips: string;
  users: string;
  login: string;
  tips: string;
  home: string;
  myTips: string;
  delete: string;
  slash: string;
  findId: string;
}

export const endpoints: Endpoints = {
  plantips: "/plantips",
  users: "/users",
  login: "/login",
  tips: "/tips",
  home: "/",
  myTips: "/my-tips",
  delete: "/delete",
  slash: "/",
  findId: "/:id",
};
