import AdminPage from "./pages/AdminPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ShowPage from "./pages/ShowPage";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
  {
    paht: "/",
    component: HomePage,
  },
  {
    paht: "/blogs",
    component: ListPage,
  },
  {
    paht: "/admin",
    component: AdminPage,
    auth: true,
  },
  {
    paht: "/blogs/create",
    component: CreatePage,
    auth: true,
  },
  {
    paht: "/blogs/:id/edit",
    component: EditPage,
    auth: true,
  },
  {
    paht: "/blogs/:id",
    component: ShowPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

export default routes;
