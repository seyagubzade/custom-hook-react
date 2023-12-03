import Admin from "../pages/admin";
import AddPage from "../pages/admin/AddPage";
import Products from "../pages/admin/Products";
import Site from "../pages/site";
import DetailPage from "../pages/site/DetailPage";
import Home from "../pages/site/Home";

const RouterConfig = [
    {
        path: '/admin',
        element: <Admin/>,
        children: [
            {
                path: "",
                element : <Products />
            },
            {
                path: "add-new",
                element : <AddPage />
            }
        ]
    },
    {
        path: '/',
        element: <Site />,
        children: [
            {
                path: "",
                element : <Home />
            },
            {
                path: "/detail/:id",
                element : <DetailPage />
            }
        ]
    }
]

export default RouterConfig;