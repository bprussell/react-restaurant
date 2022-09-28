import { Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import "./index.css";
import Menu from "./Menu";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./shared/ErrorFallback";

export default function App() {
  return (
    <>
      <nav className="flex sm:justify-left space-x-4 bg-indigo-100 p-1">
        <h1 className="text-3xl font-bold">React Restaurant</h1>
        {[
          ["Home", "/"],
          ["Admin", "/admin"],
        ].map(([title, url], index) => (
          <Link
            key={index}
            to={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </Link>
        ))}
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Menu />
            </ErrorBoundary>
          }
        />
        <Route
          path="/admin"
          element={
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Admin />
            </ErrorBoundary>
          }
        />
      </Routes>
    </>
  );
}
