import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/globals.css"; // Ensure this matches your actual CSS filename

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}