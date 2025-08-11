import { createBrowserRouter } from "react-router-dom";
import Home from "./features/ui/Home";
import Cart from "./features/cart/Cart";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as loaderOrder } from "./features/order/Order";
import CreateOrder, {
  action as actionCreateOrder,
} from "./features/order/CreateOrder";
import AppLayout from "./features/ui/AppLayout";
import Error from "./features/ui/Error";

//! Algorithm of routing via react-router-dom
// usefull for dataLoaders, data actions and data fetching
//* 1) npm i react-router-dom (in this project v.6)
//* 2) writting routs inside createBrowseRouter([{...}, {...}, ...])
// make a nested routs inside 'children' property of parent <Applayout/> witout path
// use <Outlet/> for rendering corresponding page inside <AppLayout/>
//* 3) wrap our App component with <RouterProvider router={router}> in main.jsx

//! Fetching data with react router loaders (render as you fetch)
//* 1) create loader
// by the convention should be in the same file as page
//* 2) connect the loader f to the route
//* 3) provide the data to the page via useLoaderData
// access to data inside component using useLoaderData()
//? we can acces data using {params} as argument of loader f

//! writting and mutating data with react router actions
//* 1) use <Form method="POST/PUTCH/DELETE"> component from react-router-dom
//* 2) create f action({request}) in the same file as Component which gives a data
// export async function action({ request }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   console.log(data);
//   return null;
// }
//? use <input type='hidden' name='...' value={...}/> to access neccessary data from component
//* 3) Make a new obj spreading received data like:
  // const order = {
  //   ...data,
  //   priority: data.priority === 'on',
  //   cart: JSON.parse(data.cart)
  // }
//* redirect(`/order/${newOrder}`); if neccessary

//* 4) Connect f and route inside route as action value
//* 5) useActionData inside the Component itself to acces data from action f for catching errors
//* 6) create and return errors obj if errors ocure

//! Acces to global state loading via useNavigation()
// check status as loading, idle or submitting

//! Error handling in createBrowserRouter
// give a errorElement in parent route and potential child route
// create an Error component which will thrown in case of error use useRouteError()
// connect them

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: actionCreateOrder,
        errorElement: <Error />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <h1>Hello Vite</h1>
    </div>
  );
}

export default App;
