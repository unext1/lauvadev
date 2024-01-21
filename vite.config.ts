import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { remixDevTools } from 'remix-development-tools/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import remixConfig from './remix.config.mjs';
import svgr from 'vite-plugin-svgr';

installGlobals();

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [remixDevTools(), remix(remixConfig), tsconfigPaths(), svgr()]
});
