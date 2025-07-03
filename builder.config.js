// You might place this anywhere else in your project
import '@vueform/builder/index.css';
import { defineConfig } from '@vueform/builder';

export default defineConfig({
    import: true,
    ai: {
        enabled: true,
        endpoint: 'https://myendpoint.com',
    },
});
