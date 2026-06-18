import { build } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'node:os';
import path from 'node:path';

const tmp = os.tmpdir();

export const handler = async () => {
  await build({
    configFile: false, // <- crucial
    root: process.cwd(),
    plugins: [react()],
    cacheDir: path.join(tmp, '.vite'),
    build: {
      outDir: path.join(tmp, 'dist'),
      emptyOutDir: true, // <- crucial
    },
  });
}
