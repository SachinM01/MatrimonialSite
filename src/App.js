import './App.css';
import About from './Component/About';
import Home from './Component/Home';
import Layout from './Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About/>,
        },
      ],
    },
  ])

  return (
    <>
      {/* <Home/> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
