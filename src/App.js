import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Toast from "./components/Toast";
import routes from "./routes";
import useToast from "./hooks/toast";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const toasts = useSelector((state) => state.toast.toasts);
  const { deleteToast } = useToast();
  return (
    <Router>
      <NavBar />
      <Toast toasts={toasts} deleteToast={deleteToast} />
      <div className="container mt-3">
        <Switch>
          {routes.map((route) => {
            if (route.auth) {
              return (
                <ProtectedRoute
                  key={route.paht}
                  path={route.paht}
                  component={route.component}
                  exact
                />
              );
            }
            return (
              <Route
                key={route.paht}
                path={route.paht}
                component={route.component}
                exact
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
