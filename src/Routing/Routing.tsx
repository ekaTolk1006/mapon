import { useRoutes } from "react-router-dom";

export const Routing = () => {
  const routes = useRoutes([
    // { path: "/", element: <HomePage /> },
    // { path: "ProductPage/:category", element: <ProductPage /> },
    // { path: "ProductPage/:category/:id", element: <ProductPreview /> },
  ]);

  return routes;
};
