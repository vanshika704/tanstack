import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider, //import the necessary things from tanstack
 
} from "@tanstack/react-query";

const queryClient = new QueryClient(); // make a variable named queryclient and wrap the app in queryclient provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> 
      <App /> 
    </QueryClientProvider>
  </React.StrictMode>
);
