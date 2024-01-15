import { useRouteLoaderData } from '@remix-run/react';

import { type loader } from '~/root';

export const useRootData = () => {
  return useRouteLoaderData<typeof loader>('root');
};
