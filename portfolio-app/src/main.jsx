import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3500,

        style: {
          background: "#0f172a",
          color: "#fff",
          border: "1px solid #22d3ee",
          borderRadius: "16px",
        },

        success: {
          iconTheme: {
            primary: "#22d3ee",
            secondary: "#0f172a",
          },
        },

        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#0f172a",
          },
        },
      }}
    />

  </StrictMode>
);