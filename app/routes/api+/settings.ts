import { json, redirect, type ActionFunctionArgs } from '@remix-run/node';
import { zx } from 'zodix';

import { setTheme, themeSchema } from '~/services/theme.server';

export const loader = () => {
  return redirect('/');
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const result = await zx.parseFormSafe(request, { theme: themeSchema });
  if (!result.success) {
    return json(result.error, { status: 400 });
  }
  return json({}, { headers: { 'Set-Cookie': await setTheme(result.data.theme) } });
};
