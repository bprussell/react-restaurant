import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const DevTools = React.lazy(() => import("./mocks/DevTools"));

const useDevTools = import.meta.env.VITE_ENABLE_DEVTOOLS === "Y";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ErrorBoundary fallback={<h1>Oops! Sorry, an error occurred.</h1>}>
        <BrowserRouter>
          <Toaster />
          {useDevTools ? <DevTools /> : <App />}
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>
);
