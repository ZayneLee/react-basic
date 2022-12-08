import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ShowPage from "./pages/ShowPage";

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
    paht: "/blogs/create",
    component: CreatePage,
  },
  {
    paht: "/blogs/:id/edit",
    component: EditPage,
  },
  {
    paht: "/blogs/:id",
    component: ShowPage,
  },
];

export default routes;
