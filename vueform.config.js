import en from '@vueform/vueform/locales/en'
import tailwind from '@vueform/vueform/dist/tailwind'
import builder from '@vueform/builder/plugin'
import { defineConfig } from '@vueform/vueform'

export default defineConfig({
    theme: tailwind,
    locales: { en },
    locale: 'en',
    apiKey: 'wu7v-yh50-9wgu-awcz-uqam',
    plugins: [
        builder,
    ],
})