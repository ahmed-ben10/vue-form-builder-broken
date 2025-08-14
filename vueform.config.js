import en from '@vueform/vueform/locales/en'
import tailwind from '@vueform/vueform/dist/tailwind'
import builder from '@vueform/builder/plugin'
import { defineConfig } from '@vueform/vueform'
import ResumableMultifileElement from "./src/components/ResumableMultifileElement.vue";

export default defineConfig({
  theme: tailwind,
  locales: { en },
  locale: 'en',
  apiKey: 'z777-w4mz-nvt6-hr4n-yzow',
  plugins: [
    builder,
  ],
  elements: [
    ResumableMultifileElement,
  ],
})