import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PaperPresentation from "./Pages/Technical/PaperPresentation.jsx";
import Home from "./Pages/Home.jsx";
import CodeHunt from "./Pages/Technical/CodeHunt.jsx";
import Webcraft from "./Pages/Technical/Webcraft.jsx";
import SympAi from "./Pages/Technical/SympAi.jsx";
import Adzap from "./Pages/Non-Technical/Adzap.jsx";
import ClueClash from "./Pages/Non-Technical/ClueClash.jsx";
import Fusionary from "./Pages/Non-Technical/Fusionary.jsx";
import CineWhiz from "./Pages/Online-Events/CineWhiz.jsx";
import ShutterStories from "./Pages/Online-Events/ShutterStories.jsx";

const route = createBrowserRouter([
  {
    paths: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/paper-presentation",
        element: <PaperPresentation />,
      },

      {
        path: "/code-hunt",
        element: <CodeHunt />,
      },
      {
        path: "/draftedge",
        element: <Webcraft />,
      },
      {
        path: "/sympai",
        element: <SympAi />,
      },

      {
        path: "/adzap",
        element: <Adzap />,
      },
      {
        path: "/clueclash",
        element: <ClueClash />,
      },
      {
        path: "/fusionary",
        element: <Fusionary />,
      },
      {
        path: "/cinewhiz",
        element: <CineWhiz />,
      },
      {
        path: "/shutterstories",
        element: <ShutterStories />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />,
);
