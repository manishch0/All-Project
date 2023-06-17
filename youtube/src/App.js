import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./Component/Body";
import Header from "./Component/Header";
import MainContainer from "./Component/MainContainer";
import WatchPage from "./Component/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watchPage",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </>
  );
}

export default App;

// Header
// body
// sideBar
//   menuItem;
// mainContainer
//   buttonList
//   videoContainer
//   videoCard
