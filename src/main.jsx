import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { store } from "./redux/Store.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./context/AuthContext";

// Correct Import
import { DarkModeProvider } from "./components/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <DarkModeProvider>
          <App />

          <ToastContainer
            position="top-right"
            autoClose={2000}
            theme="colored"
          />
        </DarkModeProvider>
      </AuthProvider>
    </Provider>
  </StrictMode>
);