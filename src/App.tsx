import Portfolio from "./pages/Portfolio";
import AudioAdmin from "./pages/AudioAdmin";
import AudioDebugPage from "./pages/AudioDebugPage";

export default function App() {
  const path = window.location.pathname;

  if (path.startsWith("/admin/audio")) {
    return <AudioAdmin />;
  }

  if (path.startsWith("/debug")) {
    return <AudioDebugPage />;
  }

  return <Portfolio />;
}
