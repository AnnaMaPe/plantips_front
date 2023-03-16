interface Endpoints {
  plantips: string;
  users: string;
  login: string;
  tips: string;
  home: string;
  myTips: string;
  delete: string;
  id: string;
}

export const endpoints: Endpoints = {
  plantips: "/plantips",
  users: "/users",
  login: "/login",
  tips: "/tips",
  home: "/",
  myTips: "/my-tips",
  delete: "/delete",
  id: "/:id",
};
