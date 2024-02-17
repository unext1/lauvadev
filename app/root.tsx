import { type LoaderFunctionArgs } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
  type MetaFunction
} from '@remix-run/react';

import '~/tailwind.css';
import { getTheme } from './services/theme.server';

export const meta: MetaFunction = ({ location }) => {
  return [
    {
      property: 'og:image',
      content: '/favicon.ico'
    },
    {
      property: 'og:title',
      content: 'Laurynas Valiulis - Web Developer'
    },
    {
      property: 'og:description',
      content:
        'Laurynas is a 20 year old programmer driven for delivering effective solutions with a strong focus on problem solving.'
    },
    {
      property: 'og:keywords',
      content: 'portfolio, laurynas valiulis, Laurynas, web, developer, remix, web developer, laurynas, sweden, sverige'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `https://lauva.dev${location.pathname}` },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://lauva.dev' },
    { property: 'twitter:title', content: 'Laurynas Valiulis - Web Developer' },
    {
      property: 'twitter:description',
      content:
        'Laurynas is a 20 year old programmer driven for delivering effective solutions with a strong focus on problem solving.'
    },
    { property: 'twitter:image', content: 'https://i.imgur.com/2qUvFT1.png' }
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const colorScheme = await getTheme(request);

  return json({ colorScheme });
};

export default function App() {
  const { colorScheme } = useLoaderData<typeof loader>();

  return (
    <html lang="en" data-theme={colorScheme} style={{ colorScheme }} className="antialiased min-h-screen-safe">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#020817" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen-safe flex flex-col relative overflow-x-hidden">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
