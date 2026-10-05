import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PaperPresentation from "./Pages/Technical/PaperPresentation.jsx";
import Home from "./Pages/Home.jsx";
import CodeVolt from "./Pages/Technical/CodeVolt.jsx";
import AiVerse from "./Pages/Technical/AiVerse.jsx";
import PromptParadox from "./Pages/Technical/PromptParadox.jsx";
import WitAndWill from "./Pages/Non-Technical/WitAndWill.jsx";
import ReelAndRhythm from "./Pages/Non-Technical/ReelAndRhythm.jsx";
import PlayerAuction from "./Pages/Non-Technical/PlayerAuction.jsx";

const route = createBrowserRouter([
  {
    path: "/",
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
        path: "/code-volt",
        element: <CodeVolt />,
      },
      {
        path: "/ai-verse",
        element: <AiVerse />,
      },
      {
        path: "/prompt-paradox",
        element: <PromptParadox />,
      },

      {
        path: "/wit-and-will",
        element: <WitAndWill />,
      },
      {
        path: "/reel-and-rhythm",
        element: <ReelAndRhythm />,
      },
      {
        path: "/player-auction",
        element: <PlayerAuction />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />,
);
