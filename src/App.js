import { createBrowserRouter } from "react-router-dom";
import RouterConfig from "./routes/router";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";

const routes = createBrowserRouter(RouterConfig);
function App() {
  return (
    <RouterProvider router={routes}>
    </RouterProvider>
  );
}

export default App;
