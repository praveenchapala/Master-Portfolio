import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>

      <App />

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3500,

          style: {
            background: "#0f172a",
            color: "#ffffff",
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

    </ThemeProvider>
  </StrictMode>
);