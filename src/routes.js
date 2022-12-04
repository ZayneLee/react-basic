import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

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
    paht: "/blogs/edit",
    component: EditPage,
  },
];

export default routes;
