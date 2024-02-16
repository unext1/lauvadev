import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { remixDevTools } from 'remix-development-tools/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import remixConfig from './remix.config.mjs';

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [remixDevTools(), remix(remixConfig), tsconfigPaths()]
});
