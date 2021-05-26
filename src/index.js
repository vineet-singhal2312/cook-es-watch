import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ReducerProvider } from "./providers/useReducerProvider";
import { PlayListProvider } from "./components/playlist/PlayListContextProvier";
import { HistoryProvider } from "./components/history/HistoryContextProvider";
import { LoaderProvider } from "./components/home/LoaderContextProvider";
import { AuthProvider } from "./providers/AuthProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LoaderProvider>
          <ReducerProvider>
            <HistoryProvider>
              <PlayListProvider>
                <App />
              </PlayListProvider>
            </HistoryProvider>
          </ReducerProvider>
        </LoaderProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  rootElement
);
