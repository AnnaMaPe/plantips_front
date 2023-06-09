interface Paths {
  plantips: string;
  users: string;
  login: string;
  register: string;
  tips: string;
  myTips: string;
  delete: string;
  slash: string;
  findId: string;
  create: string;
  detail: string;
  filter: string;
}

export const paths: Paths = {
  plantips: "/plantips",
  users: "/users",
  login: "/login",
  register: "/register",
  tips: "/tips",
  myTips: "/my-tips",
  delete: "/delete",
  slash: "/",
  findId: "/:id",
  create: "/create",
  detail: "/tip",
  filter: "/:filter",
};
