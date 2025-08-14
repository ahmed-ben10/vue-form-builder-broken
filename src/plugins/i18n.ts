import {createI18n} from 'vue-i18n';

function importLang(files) {
    const modules = {};

    for (const path in files) {
        let filePath = path.split('/').pop();
        if (filePath) {
            const fileName = filePath.replace('.json', '');
            modules[fileName] = files[path].default;
        }
    }

    return modules;
}

export default createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    warnHtmlInMessage: 'off',
    messages: {
        en: importLang(import.meta.glob('./src/lang/en/*.json', { eager: true })),
        nl: importLang(import.meta.glob('./src/lang/nl/*.json', { eager: true }))
    }
});