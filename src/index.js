import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ReducerProvider } from "./providers/useReducerProvider";
import { PlayListProvider } from "./playlist/PlayListContextProvier";
import { HistoryProvider } from "./history/HistoryContextProvider";
import { LoaderProvider } from "./home/LoaderContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoaderProvider>
        <ReducerProvider>
          <HistoryProvider>
            <PlayListProvider>
              <App />
            </PlayListProvider>
          </HistoryProvider>
        </ReducerProvider>
      </LoaderProvider>
    </Router>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
