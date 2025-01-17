import {
  isRouteErrorResponse,
  Links,
  Meta, NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import stylesheet from "~/app/routing/app.css?url";
import {store} from "~/app/store/store";
import {Provider} from "react-redux";
import type {Route} from "../../../.react-router/types/src/app/+types";

export const links: Route.LinksFunction = () => [
  {rel: "preconnect", href: "https://fonts.googleapis.com"},
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {rel: "stylesheet", href: stylesheet},
];

export function Layout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <Meta/>
      <Links/>
    </head>
    <body>
    {children}
    <ScrollRestoration/>
    <Scripts/>
    </body>
    </html>
  );
}

export default function App() {
  return <>
    <Provider store={store}>
      <Outlet/>
    </Provider>
  </>
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
  let message = "Уууупс";
  let details = "Этот казус мы еще не продумали";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "Страница не найдена"
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Ой! Что-то пошло не так</h1>
          <p className="text-gray-700 mb-4">{message}</p>
          {details && <p className="text-sm text-gray-500 mb-6">{details}</p>}
          {stack && (
            <div className="bg-gray-100 border border-gray-300 rounded-md p-4 overflow-x-auto">
              <h2 className="text-lg font-medium text-gray-800 mb-2">Error Details:</h2>
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              <code>{stack}</code>
            </pre>
            </div>
          )}
          <NavLink to={"/"}>
            <button
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Вернуться на главную
            </button>
          </NavLink>
        </div>
      </div>
    </main>
  );
}
