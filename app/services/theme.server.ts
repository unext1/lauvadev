import { createCookie } from '@remix-run/node';
import { createTypedCookie } from 'remix-utils/typed-cookie';
import { z } from 'zod';

export const MINUTE = 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const YEAR = DAY * 365;

export const themeSchema = z.enum(['light', 'dark', 'system']).optional();
type Theme = z.infer<typeof themeSchema>;

const themeCookie = createCookie('user-theme', {
  path: '/',
  maxAge: YEAR
});

const userThemeCookie = createTypedCookie({ cookie: themeCookie, schema: themeSchema });

export const getTheme = async (request: Request) => {
  const theme = await userThemeCookie.parse(request.headers.get('Cookie'));
  if (!theme) return 'system';
  return theme;
};

export const setTheme = (theme: Theme) => {
  return userThemeCookie.serialize(theme);
};
