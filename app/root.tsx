import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';

import { json, type LoaderFunctionArgs } from '@remix-run/node';
import '~/tailwind.css';
import { getTheme } from './services/theme.server';
import Navbar from './components/layout/navbar';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const colorScheme = await getTheme(request);

  return json({ colorScheme });
};

export default function App() {
  const { colorScheme } = useLoaderData<typeof loader>();

  return (
    <html lang="en" data-theme={colorScheme} style={{ colorScheme }} className="antialiased min-h-screen">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
