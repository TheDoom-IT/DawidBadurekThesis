import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        base: env.BASE_URL,
        resolve: {
            alias: {
                three: path.resolve('./node_modules/three'),
            },
        },
        plugins: [react()],
    };
});
