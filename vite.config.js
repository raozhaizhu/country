import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/countryPage/', // 将 'new-repo-name' 替换为您的新仓库名
});

