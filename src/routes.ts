import { createBrowserRouter } from "react-router";
import Portfolio from "./pages/Portfolio";
import AudioAdmin from "./pages/AudioAdmin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
  {
    path: "/admin/audio",
    Component: AudioAdmin,
  },
]);
